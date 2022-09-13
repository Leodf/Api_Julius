import { Router } from "express"
import { UsuarioController } from "../controller/UsuarioController"
import { Usuario } from "../entity/Usuario"

export const routerUsuario = Router()
const usuarioCtrl = new UsuarioController()


// Serviço para salvar um novo usuário
routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body
    const usuario = new Usuario(nome, email)
    const usuarioSalvo = await usuarioCtrl.salvar(usuario)
    res.json(usuarioSalvo)
})

// Serviço para recuperar todos os usuários
routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperarTodos()
    res.json(usuarios)
})