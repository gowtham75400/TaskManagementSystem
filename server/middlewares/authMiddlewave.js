import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    // Accessing Token
    let token = req.cookies?.token;

    if (token) {
      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user from the database
      const resp = await User.findById(decodedToken.userId).select(
        "isAdmin email"
      );

      // Check if the user exists
      if (!resp) {
        return res
          .status(401)
          .json({ status: false, message: "User not found." });
      }

      req.user = {
        email: resp.email,
        isAdmin: resp.isAdmin,
        userId: decodedToken.userId,
      };

      // Call the next middleware or route handler
      next();
    } else {
      return res
        .status(401)
        .json({
          status: false,
          message: "Not authorized. Try logging in again.",
        });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({
        status: false,
        message: "Not authorized. Try logging in again.",
      });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };
