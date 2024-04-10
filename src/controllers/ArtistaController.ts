import { Request, Response } from "express";
import { ArtistaService } from "../services/ArtistaService";
import { ArtistaRequestDtoParams, ArtistaRequestDtoValidation } from "../dto/ArtistaRequestDto";
import { ZodError } from "zod";
import { ArtistaResponseDto } from "../dto/ArtistaResponseDto";

export class ArtistaController {

    artistaService: ArtistaService;

    constructor(artistaService: ArtistaService) {
        this.artistaService = artistaService;
    }

    criaArtista = async (req: Request, res: Response) => {
        try {
            const artistaRequestDto = ArtistaRequestDtoValidation.parse(req.body);
            const artistaNovo = await this.artistaService.criaArtista(artistaRequestDto);
            const artistaResponseDto = ArtistaResponseDto.from(artistaNovo);
            return res.status(201).json(artistaResponseDto);
        } catch (err) {
            if(err instanceof ZodError){
                return res.status(400).json(err.issues);
            }
            return res.status(500).end('Nao pode criar artista')
        }
    }

    listaArtista = async (req: Request, res: Response) => {
        const artista = await this.artistaService.listaArtista();
        const artistaDto = artista.map(u => ArtistaResponseDto.from(u))
        return res.json(artistaDto);
    }

    pegaArtista = async (req: Request, res: Response) => {
        try {
            const params = ArtistaRequestDtoParams.parse(req.params)
            const artista = await this.artistaService.pegaArtista(params.id);
            if(artista)
                return res.status(200).json(ArtistaResponseDto.from(artista));
            else
                return res.status(404).end("Artista não encontrado")

        } catch (err) {
            return res.status(404).end("Artista não encontrado")
        }
    }

    deletaArtista = async (req: Request, res: Response) => {
        try {
            const params = ArtistaRequestDtoParams.parse(req.params)
            await this.artistaService.deletaArtista(params.id);
            return res.status(200).end("Artista removido");
        } catch (err) {
            return res.status(404).end("Artista não encontrado")
        }
    }

}