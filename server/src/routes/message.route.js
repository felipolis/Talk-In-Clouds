import express from 'express';
import { body } from 'express-validator';
import requestHandler from "../handlers/request.handler.js";
import tokenMiddleware from '../middlewares/token.middleware.js';
import messageController from '../controllers/message.controller.js';


const router = express.Router();

router.get(
    '/:chatId',
    tokenMiddleware.auth,
    requestHandler.validate,
    messageController.allMessages
)








export default router;