/**Lembrando...
     * Como o JS é sempre interpretado, os erros só vão surgir quando o programa for executado. Diferente das linguagens com compilador, ex: Java, C#...
     */
// SERÁ UMA CLASSE ABSTRATA, NÃO PODERÁ SER INSTANCIADA, APENAS HERDADA.
export class Conta {
    // CONSTRUCTOR  METHOD
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não pode instanciar uma classe abstrata.")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // PRIVATE METHODS

    set cliente(cliente) {

        if (cliente instanceof Cliente) {
            this._cliente = cliente
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    // PUBLIC METHODS 

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
            return `Valor depositado. Novo Saldo: ${this._saldo}`
        } else {
            return `Valor inválido. Escolha outro valor para realizar o depósito.`
        }
    }

    // ABSTRACT METHODS: HAVE TO BE IMPLEMENTED 
    sacar(valor) {
        throw new Error ("Método abstrato. Implementação obrigatória.")
    }

    _sacar(taxa, valor) {
        const  valorSaque = valor * taxa
        if (this._saldo >= valorSaque) {
            this._saldo -= valorSaque
            return `Saque realizado! Novo Saldo: ${this._saldo}`
        } else {
            return `Saldo insuficiente.`
        }
    }

    transferir(valor, _cliente) {
        this.sacar(valor)
        _cliente.depositar(valor)
    }
}