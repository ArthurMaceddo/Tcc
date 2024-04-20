import { ZodError } from "zod";
import { PostagemRequestDtoParams, PostagemRequestDtoValidation } from "../dto/PostagemRequestDto";
import { PostagemResponseDto } from "../dto/PostagemResponseDto";
import { PostagemService } from "../services/PostagemService";
import { Request, Response } from "express";

export class PostagemController{
    postagemService : PostagemService;

    constructor(postagemService: PostagemService){
        this.postagemService = postagemService
    }

    criarPost =  async (req: Request , res:Response) => {
        try{
            const PostagemRequestDto = PostagemRequestDtoValidation.parse(req.body);
            const novaPostagem = await this.postagemService.criaPost(PostagemRequestDto);
            const postagemResponseDto = PostagemResponseDto.from(novaPostagem);
            return res.status(201).json(postagemResponseDto)
        }catch (err){
            if(err instanceof ZodError){
                return res.status(400).json(err.issues);
            }
            return res.status(500).end("Não foi possivel criar postagem")
        }
    }

    pegaPost = async(req: Request, res: Response) => {
       try{
        const params = PostagemRequestDtoParams.parse(req.params);
        const postagem = await this.postagemService.pegaPost(params.id);
        if(postagem)
            return res.status(200).json(PostagemResponseDto.from(postagem));
        else
            return res.status(404).end("Postagem não encontrada")
       } catch {
            return res.status(404).end("Postagem não encontrada")
       }
    }

    deletaPost = async (req: Request, res: Response) => {
        try {
            const params = PostagemRequestDtoParams.parse(req.params)
            await this.postagemService.deletaPost(params.id);
            return res.status(200).end("Postagem removido");
        } catch (err) {
            return res.status(404).end("Postagem não encontrado")
        }
    }
}