import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    // PUBLIC VARIABLES
    static id = 0;

    // PRIVATE VARIABLES

    // CONSTRUCTOR  METHOD
    constructor(saldo, cliente, agencia) {
        super(saldo, cliente, agencia)
        ContaPoupanca.id++;
    }

    get id() {
        return ContaPoupanca.id;
    }

    //OVERRIDE
    sacar(valor) {
        const taxa = 1.02;
        return super._sacar(valor, taxa)
    }
}