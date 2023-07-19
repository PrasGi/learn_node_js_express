import { prismaClient } from "../application/database.js";
import { registerUserValidation } from "../validation/user-validation.js";
import validate from "../validation/validation.js";
import ResponseError from "../error/response-error.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });

  if (countUser > 0) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      email: true,
      name: true,
    },
  });
};

export default {
  register,
};
