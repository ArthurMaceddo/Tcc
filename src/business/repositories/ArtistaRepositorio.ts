import { v4 } from "uuid";
import { MyDB } from "../../db/MyDB";
import { Artista } from "../entities/Artista";
import { Repositorio } from "./Repositorio";
import { BaseRepositorio } from "./BaseRepositorio";

export class ArtistaRepositorio extends BaseRepositorio<Artista> {
    
    constructor(){
        super(MyDB.artistas)
    }

}