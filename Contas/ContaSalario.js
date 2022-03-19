import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    // PUBLIC VARIABLES
    static id = 0;

    // PRIVATE VARIABLES

    // CONSTRUCTOR  METHOD
    constructor(saldo, client, agencia) {
        super(saldo, cliente, agencia);
    }

    get id() {
        return ContaCorrente.id;
    }


    // IMPLEMENTED ABSTRACT METHOD
    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(taxa, valor);
    }

}