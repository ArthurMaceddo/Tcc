import { Router } from "express";
import { ArtistaServiceImpl } from "../services/impl/ArtistaServiceImpl";
import { ArtistaController } from "../controllers/ArtistaController";
import { ArtistaRepositorio } from "../business/repositories/ArtistaRepositorio";



const artistaRouter = Router();

const artistaRepo = new ArtistaRepositorio();
const artistaService = new ArtistaServiceImpl(artistaRepo);
const artistaController = new ArtistaController(artistaService);
artistaRouter.get('/', artistaController.listaArtista);
artistaRouter.get('/:id', artistaController.pegaArtista);
artistaRouter.post('/', artistaController.criaArtista);
artistaRouter.delete('/:id', artistaController.deletaArtista);


export default artistaRouter;