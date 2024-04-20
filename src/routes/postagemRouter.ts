import { Router } from "express";
import { PostagemRepositorio } from "../business/repositories/PostagemRepositorio";
import { PostagemController } from "../controllers/PostagemController";
import { PostagemServiceImpl } from "../services/impl/PostagemServiceImpl";

const postagemRouter = Router();

const postagemRepo = new PostagemRepositorio();
const postagemService = new PostagemServiceImpl(postagemRepo);
const postagemController = new PostagemController(postagemService);
postagemRouter.get('/', postagemController.pegaPost);
postagemRouter.post('/id:', postagemController.criarPost);
postagemRouter.delete('/:id', postagemController.deletaPost);

export default postagemRouter;