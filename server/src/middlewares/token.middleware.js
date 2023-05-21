import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenDecode = (req) => {
    try {
        const bearerHeader = req.headers['authorization'];

        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET_KEY
            )
        }

        return false
    } catch {
        return false
    }
}