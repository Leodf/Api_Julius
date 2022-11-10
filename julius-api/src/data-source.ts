import { join } from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lancamento } from "./entity/Lancamento"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "postgres",
    // database: "julius",
    type: "sqlite",
    database: join(__dirname, "bd_teste.db"),
    synchronize: true,
    logging: false,
    entities: [Usuario, Lancamento],
    migrations: [],
    subscribers: [],
})
