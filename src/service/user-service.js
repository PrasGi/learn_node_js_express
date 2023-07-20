import { prismaClient } from "../application/database.js";
import {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
} from "../validation/user-validation.js";
import validate from "../validation/validation.js";
import ResponseError from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

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

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email,
    },
    select: {
      email: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "Email or password is wrong");
  }

  const passwordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  if (!passwordValid) {
    throw new ResponseError(404, "Email or password is wrong");
  }

  const token = uuid().toString();

  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      email: user.email,
    },
    select: {
      token: true,
    },
  });
};

const get = async (email) => {
  const emailUser = validate(getUserValidation, email);

  const user = await prismaClient.user.findUnique({
    where: {
      email: emailUser,
    },
    select: {
      email: true,
      name: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "User is no found");
  }

  return user;
};

const update = async (request) => {
  const user = validate(updateUserValidation, request);

  const countUsers = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });

  if (countUsers != 1) {
    throw new ResponseError(404, "User is not found");
  }

  const data = {};
  if (user.name) {
    data.name = user.name;
  }
  if (user.password) {
    data.password = await bcrypt.hash(user.password, 10);
  }

  return prismaClient.user.update({
    where: {
      email: user.email,
    },
    data: data,
    select: {
      name: true,
      email: true,
    },
  });
};

const logout = async (email) => {
  email = validate(getUserValidation, email);

  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return prismaClient.user.update({
    where: {
      email: email,
    },
    data: {
      token: null,
    },
    select: {
      email: true,
    },
  });
};

export default {
  register,
  login,
  get,
  update,
  logout,
};
