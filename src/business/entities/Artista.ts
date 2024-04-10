import { Base } from "./Base"

export class Artista extends Base {
    email: string
    name: string 
    senha: string
    isArtist: boolean; // Flag para indicar se o usuário é um artista
    artistDetails?: ArtistDetails; // Detalhes adicionais do artista    
}

interface ArtistDetails{
    name: string
    bio: string
}
