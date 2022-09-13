import { Lancamento } from "../entity/Lancamento"
import { AppDataSource } from "../data-source"

const { manager } = AppDataSource

export class LancamentoController {
    async salvar(lancamento: Lancamento) {
        const lancamentoSalvo = await manager.save(lancamento)
        return lancamentoSalvo
    }
}