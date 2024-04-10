import { Artista } from "../business/entities/Artista"

export class ArtistaResponseDto {
    id: string
    name: string
    email: string

    public static from(artista: Artista): ArtistaResponseDto{
        const artistaResponseDto = new ArtistaResponseDto();
        artistaResponseDto.email = artista.email;
        artistaResponseDto.id = artista.id;
        artistaResponseDto.name = artista.name;
        return artistaResponseDto;
    }
}