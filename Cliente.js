import { Conta } from "./Conta.js";

export class Cliente extends Conta  {
    nome;
    _cpf;

    constructor(nome, cpf) {
        super()
        this.agencia = Math.floor(Math.random(0 - 1000) * 1000)
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf
    }
}