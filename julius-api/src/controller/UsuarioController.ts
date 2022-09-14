import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
    
    private usuarioRepositorio = AppDataSource.getRepository(Usuario)

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await this.usuarioRepositorio.save(usuario)
        return usuarioSalvo
    }

    async recuperarTodos() {
        const usuarios = await this.usuarioRepositorio.find()
        return usuarios
    }

    async recuperarPorId(id: number) {
        const usuario = await this.usuarioRepositorio.findOneBy({id: id})
        return usuario
    }

    async recuperarLancamentosDoUsuario(id: number) {
        const usuario = await this.usuarioRepositorio.findOne({
            where: {
                id: id
            },
            relations: {
                lancamentos: true
            }
        })
        
        return usuario.lancamentos
    }
}