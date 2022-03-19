import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    // PUBLIC VARIABLES
    static id = 0;

    // PRIVATE VARIABLES

    // CONSTRUCTOR  METHOD
    constructor(saldo, cliente, agencia) {
        super(saldo, cliente, agencia);
        ContaCorrente.id++;
    }

    get id() {
        return ContaCorrente.id;
    }


    // IMPLEMENTED ABSTRACT METHOD
    sacar(valor) {
        const taxa = 1;
        return this._sacar(taxa, valor);
    }
}