import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario";

const { manager } = AppDataSource

export class UsuarioController {
    async salvar(usuario: Usuario) {
        const usuarioSalvo = await manager.save(usuario)
        return usuarioSalvo
    }

    async recuperarTodos() {
        const usuarios = await manager.find(Usuario)
        return usuarios
    }

    async recuperarPorId(id: number) {
        const usuario = await manager.findOneBy(Usuario, {id: id})
        return usuario
    }
}