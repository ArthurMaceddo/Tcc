import { MyDB } from "../../db/MyDB";
import { Base } from "../entities/Base";
import { Postagem } from "../entities/Postagem";
import { BaseRepositorio } from "./BaseRepositorio";

export class PostagemRepositorio extends BaseRepositorio<Postagem> {
    
    constructor(){
        super(MyDB.postagem)
    }
}