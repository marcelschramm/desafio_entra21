import { DataSource } from "typeorm"
import { Cliente } from "./entity/cliente"
// import { User } from "./entity/User"
import { Venda } from "./entity/venda"
import { Carrinho } from "./entity/carrinho"
import { Produto } from "./entity/produto"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    // entities: ["src/entity/*.js"],
    entities: [ Cliente, Venda, Produto,Carrinho],
    logging: false,
    synchronize: true,
})

export default dataSource
