import express from "express";
import userRoute from "./user.route.js";
import chatRoute from "./chat.route.js";
import messageRoute from "./message.route.js";

const router = express.Router();

router.use('/user', userRoute);
router.use('/chat', chatRoute);
router.use('/message', messageRoute);



export default router;