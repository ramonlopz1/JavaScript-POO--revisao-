import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const jose = new Cliente("Ramon", 1233214)

const contaCorrenteJose = new ContaCorrente(200, jose, 322332)
const ContaPoupancaJose = new ContaPoupanca(300, jose, 322332)


ContaPoupancaJose.sacar(100)
contaCorrenteJose.sacar(100)
console.log(ContaPoupancaJose)
console.log(contaCorrenteJose)


