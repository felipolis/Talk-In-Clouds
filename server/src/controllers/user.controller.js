import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
    try {
        // Recebe os dados do body
        const {
            name,
            email,
            password,
            pic
        } = req.body;

        // Verifica se o usuário já existe
        const checkUser =  await userModel.findOne({ email });
        if (checkUser) {
            return responseHandler.badrequest(res, 'Email já cadastrado');
        }

        // Cria um novo usuário
        const user = new userModel();

        user.name = name;
        user.email = email;
        user.pic = pic;
        user.setPassword(password);

        await user.save();

        // Gera o token
        const token = jsonwebtoken.sign(
            { data: user._id },
            process.env.TOKEN_SECRET_KEY,
            { expiresIn: "24h" }
        );

        // Retorna o usuário e o token
        return responseHandler.created(res, {
            token,
            ...user._doc,
            id: user._id
        });

    } catch (error) {
        console.log(error);
        responseHandler.error(res);
    }
};