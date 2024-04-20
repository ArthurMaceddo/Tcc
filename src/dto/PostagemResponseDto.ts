import { Postagem } from "../business/entities/Postagem";

export class PostagemResponseDto  {
    id: string
    tittle: string
    description: string

        public static from(postagem: Postagem) : PostagemResponseDto{
            const postagemResponseDto = new PostagemResponseDto();
            postagemResponseDto.tittle = postagem.tittle;
            postagemResponseDto.id = postagem.id;
            postagemResponseDto.description = postagem.description;
            return postagemResponseDto;
        }
} 