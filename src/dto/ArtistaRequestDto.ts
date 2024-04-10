import { z } from "zod"

/*export class UsuarioRequestDto {
    cpf: string
    name: string
    email: string
}*/

const ArtistaRequestDtoValidation = z.object({
    email: z.string().email(),
    name: z.string().min(3),
})

export const ArtistaRequestDtoParams = z.object({
    id: z.string()
})

type ArtistaRequestDto = z.infer<typeof ArtistaRequestDtoValidation>
export { ArtistaRequestDto, ArtistaRequestDtoValidation}