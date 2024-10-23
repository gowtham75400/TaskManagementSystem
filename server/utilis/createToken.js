import jwt from "jsonwebtoken";

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", 
  });

  // Change sameSite from strict to none when you deploy our app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", // check redux
    maxAge: 7 * 24 * 60 * 60 * 1000, //mili
  });
};
