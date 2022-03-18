// SERÁ UMA CLASSE ABSTRATA, NÃO PODERÁ SER INSTANCIADA, APENAS HERDADA.
export class Conta {
    // CONSTRUCTOR  METHOD
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
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

    sacar(valor) {
       let taxa = 1
       return this._sacar(taxa, valor)
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