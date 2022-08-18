import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { Cliente } from "./cliente"
import { Carrinho } from "./carrinho"

@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idVenda: number

    @Column()
    data: number

    @Column()
    status: string

    @OneToOne(() => Cliente)
    @JoinColumn({ name: 'id_cliente' })
    Cliente: Cliente

    @OneToMany(() => Carrinho, carrinho => carrinho.venda)
    public carrinho: Carrinho[];

}

