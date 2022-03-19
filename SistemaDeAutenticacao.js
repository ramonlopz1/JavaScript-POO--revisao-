export class SistemaAutenticacao {

    // polimorfismo.
    static login(funcionario, senha) {
        return funcionario.senha == senha
    }
}