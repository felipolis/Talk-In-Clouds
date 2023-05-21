import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import "dotenv/config";
import colors from 'colors';
import routes from './src/routes/index.js';

// -------- CONFIGURAÇÕES DO SERVIDOR --------
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', routes);

const port = process.env.PORT || 5000;
const server = http.createServer(app);


// -------- INICIALIZAÇÃO DO SERVIDOR HTTP E CONEXÃO AO BANCO DE DADOS --------

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected`.cyan.underline.bold);
        server.listen(port, () => console.log(`Server running on port ${port}`.yellow.bold));
    } catch (error) {
        console.log(error);
    }
};

startServer();

// -------- SOCKETS --------
