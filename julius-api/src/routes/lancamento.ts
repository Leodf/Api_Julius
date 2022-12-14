import { LancamentoController } from "../controller/lancamentoController";
import { UsuarioController } from "../controller/UsuarioController";
import { Router } from "express";
import { Lancamento } from "../entity/Lancamento";


export const routerLancamento = Router()
const lancamentoCtrl = new LancamentoController()
const usuarioCtrl = new UsuarioController()

// Serviço para salvar um novo lançamento
routerLancamento.post('/:idUsuario', async(req, res) => {
    const idUsuario = parseInt(req.params.idUsuario)
    const { valor, descricao, data } = req.body
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario)
    if (usuario) {
        const lancamento = new Lancamento(valor, descricao, data, usuario)
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento)
        res.json(lancamentoSalvo)
    } else {
        res.status(404).json({ mensagem: 'Usuário do lançamento não encontrado!'})
    }

})