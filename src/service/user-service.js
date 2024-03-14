import { prismaClient } from "../aplication/database.js";
import { ResponseError } from "../error/response-error.js";
import { loginUserValidation,registerUserValidation,} 
from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";

import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: { username: { contains: user.username } },
  });

  if (countUser >= 1) {
    throw new ResponseError(400, "username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findFirst({
    where: { username: loginRequest.username },
    select: {
      name: true,
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }
  return user;
};

export default {
  register,
  login,
};
