import { v4 } from "uuid";
import { Artista } from "../../business/entities/Artista";
import { MyDB } from "../../db/MyDB";
import { ArtistaService } from "../ArtistaService";
import { ArtistaRequestDto } from "../../dto/ArtistaRequestDto";
import { ArtistaRepositorio } from "../../business/repositories/ArtistaRepositorio";


export class ArtistaServiceImpl implements ArtistaService {

    artistaRepositorio: ArtistaRepositorio;

    constructor(artistaRepositorio: ArtistaRepositorio) {
        this.artistaRepositorio = artistaRepositorio;
    }

    criaArtista(artistaRequestDto: ArtistaRequestDto): Promise<Artista> {
        const {name, email} = artistaRequestDto;
        const artistaNovo = new Artista();
        artistaNovo.email = email;
        artistaNovo.name = name;
        // artistaNovo.createdAt = new Date();
        // artistaNovo.updateAt = new Date();

        // crio o ID dinamicamente
        return this.artistaRepositorio.save(artistaNovo);

    }
    async listaArtista(): Promise<Artista[]> {
        return this.artistaRepositorio.find();
    }
    async pegaArtista(id: string): Promise<Artista | undefined> {
        return this.artistaRepositorio.findById(id);
    }
    async deletaArtista(id: string): Promise<void> {
        return this.artistaRepositorio.removeById(id);
    }


    
}