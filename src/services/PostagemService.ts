import { PostagemRequestDto } from "../dto/PostagemRequestDto";
import { Postagem } from "../business/entities/Postagem";

export interface PostagemService {
    criaPost(PostagemRequestDto: PostagemRequestDto) : Promise<Postagem>;
   
    pegaPost(id: string) : Promise<Postagem | undefined>;
    deletaPost(id: string) : Promise<void>
}