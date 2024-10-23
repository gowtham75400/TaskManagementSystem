// import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
    }
};


