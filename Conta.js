export class Conta {
    // PUBLIC VARIABLES
    agencia;
    
    // PRIVATE VARIABLES
    _cliente;
    _saldo = 0;

    // CONSTRUCTOR METHOD
    constructor(cliente) {

    }

    // PRIVATE METHODS
    set Cliente(cliente) {
        
        if(cliente instanceof Cliente) {
            this._cliente = cliente
        }
    }

    get Cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    // PUBLIC METHODS 

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor
            return `Valor depositado. Novo Saldo: ${this._saldo}`
        } else {
            return `Valor inválido. Escolha outro valor para realizar o depósito.`
        }
    }

    sacar(valor) {
        if(this._saldo >= valor ) {
            this._saldo -= valor
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