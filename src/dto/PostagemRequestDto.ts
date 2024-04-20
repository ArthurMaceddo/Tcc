import { type } from "os";
import { string, TypeOf, z } from "zod";

const PostagemRequestDtoValidation = z.object({
    tittle: z.string().min(4),
    description: z.string().min(10)
})

export const PostagemRequestDtoParams = z.object({
    id: z.string()
})

type PostagemRequestDto = z.infer<typeof PostagemRequestDtoValidation>
export {PostagemRequestDto, PostagemRequestDtoValidation}