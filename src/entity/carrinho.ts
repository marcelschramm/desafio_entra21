import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { Produto } from "./produto"
import { Venda } from "./venda"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    public idCarrinho!: number

    @Column()
    public quantidade!: number

    @Column()
    public preco!: number

    @ManyToOne(() => Venda, (venda) => venda.carrinho)
    @JoinColumn({name:'id_venda'})
    public venda!: Venda

    @ManyToOne(() => Produto, (produto) => produto.carrinho)
    @JoinColumn({name:'id_produto'})
    public produto!: Produto

}