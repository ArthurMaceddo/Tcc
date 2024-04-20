import { Postagem } from "../../business/entities/Postagem";
import { PostagemRepositorio } from "../../business/repositories/PostagemRepositorio";
import { PostagemRequestDto } from "../../dto/PostagemRequestDto";
import { PostagemService } from "../PostagemService";

export class PostagemServiceImpl implements PostagemService{
    
    postagemRepositorio: PostagemRepositorio;

    constructor(postagemRepositorio: PostagemRepositorio){
        this.postagemRepositorio = postagemRepositorio;
    }

    criaPost(postagemRequestDto: PostagemRequestDto): Promise<Postagem>{
        const{tittle, description} = postagemRequestDto;
        const postagemNova = new Postagem();
        postagemNova.tittle = tittle;
        postagemNova.description = description;

        return this.postagemRepositorio.save(postagemNova);
    }
    async pegaPost(id: string): Promise<Postagem | undefined> {
        return this.postagemRepositorio.findById(id);
    }
    async deletaPost(id: string): Promise<void> {
        return this.postagemRepositorio.removeById(id);
    }
}