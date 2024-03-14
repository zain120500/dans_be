import userService from "../service/user-service.js";

const otp = async (req, res, next) => {
  try {
    const result = await userService.otp(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const register = async (req, res, next) => {
  try {
    console.log(req);
    const result = await userService.register(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const username = req.user.username;
    const result = await userService.get(username);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const request = req.body;
    const username = req.user.username;
    request.username = username;

    const result = await userService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.username);
    res.status(200).json({
      data: "ok",
    });
  } catch (e) {
    next(e);
  }
};

export default {
  otp,
  register,
  login,
  get,
  update,
  logout,
};
