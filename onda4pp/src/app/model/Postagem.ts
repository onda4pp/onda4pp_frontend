import { Tema } from "./Tema"
import { Usuario } from "./Usuario"


export class Postagem{;
    public id_postagem: number
    public titulo: string
    public texto: string
    public avaliacao: number
    public data: Date
    public empresa: string
    public imagem: string
    public tema: Tema
    public usuario: Usuario
}