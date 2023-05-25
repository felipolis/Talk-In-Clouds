import express from 'express';
import { body } from 'express-validator';
import requestHandler from "../handlers/request.handler.js";
import tokenMiddleware from '../middlewares/token.middleware.js';
import chatController from '../controllers/chat.controller.js';

const router = express.Router();


router.post(
    '/',
    tokenMiddleware.auth,
    body('userId')
        .exists().withMessage('userId é obrigatório'),
        
    requestHandler.validate,
    chatController.accessChat

)


router.get(
    '/',
    tokenMiddleware.auth,
    requestHandler.validate,
    chatController.fetchChats
)









export default router;