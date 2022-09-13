import { AppDataSource } from "../data-source"

export const conectarServidorNoBD = async () => {
    
    AppDataSource
        .initialize()
        .then(() => {
            console.log(`App conectado ao BD ${AppDataSource.options.database}`)
        })
    
    process.on('SIGINT', () => {
        AppDataSource.destroy().then(() => {
            console.log(`App desconectado do BD ${AppDataSource.options.database}`)
        })
    })
}