import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Carrinho } from "./carrinho"

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idProduto: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

    @OneToMany(() => Carrinho, carrinho => carrinho.produto)
    public carrinho: Carrinho[];

}