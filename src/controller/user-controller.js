import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      status_code: 200,
      message: "User registered successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { register };
