import messageModel from "../models/message.model.js";
import responseHandler from "../handlers/response.handler.js";

const allMessages = async (req, res) => {
    try {
        // Encontra as mensagens do chat
        const messages = await messageModel.find({ chat: req.params.chatId })
            .populate("sender", "name, pic, email")
            .populate("chat")

        // Retorna as mensagens
        return responseHandler.ok(res, messages);

    } catch (error) {
        console.log(error);
        responseHandler.error(res);
    }
}



const sendMessage = async (req, res) => {}











export default {
    allMessages,
    sendMessage
}