import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"



@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente: number

    @Column()
    nome: string

    @Column()
    fone: number

    @Column()
    email: string

}