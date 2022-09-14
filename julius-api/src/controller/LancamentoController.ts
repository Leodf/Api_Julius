import { Lancamento } from "../entity/Lancamento"
import { AppDataSource } from "../data-source"

export class LancamentoController {
    
    private lancamentoRepositorio = AppDataSource.getRepository(Lancamento)

    async salvar(lancamento: Lancamento) {
        const lancamentoSalvo = await this.lancamentoRepositorio.save(lancamento)
        return lancamentoSalvo
    }
}