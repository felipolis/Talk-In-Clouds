import express from "express";
import userRoute from "./user.route.js";
import chatRoute from "./chat.route.js";

const router = express.Router();

router.use('/user', userRoute);
router.use('/chat', chatRoute);


export default router;