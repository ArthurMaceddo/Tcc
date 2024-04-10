import { Artista } from "../business/entities/Artista";
import { ArtistaRequestDto } from "../dto/ArtistaRequestDto";

export interface ArtistaService {
    criaArtista(artistaRequestDto: ArtistaRequestDto) : Promise<Artista>;
    listaArtista() : Promise<Artista[]>;
    pegaArtista(id: string) : Promise<Artista | undefined>;
    deletaArtista(id: string) : Promise<void>
}