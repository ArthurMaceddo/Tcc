import dotenv from 'dotenv'
import http from 'http';
import app from './config';
import connectUserDB from './db/MyDB';

const nomeApp = ["Indaiacult"]

let x = '5';
const port = process.env.PORT || 8000;

//dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
dotenv.config({ path: `.env.local` })

console.log(`${nomeApp} vai rodar na porta ${port}`);

const server = http.createServer(app);

server.listen(process.env.PORT, () => "Servidor Inicializado");
connectUserDB();
