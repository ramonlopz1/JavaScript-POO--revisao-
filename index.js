import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Maria", 123123123)


const cliente2 = new Cliente("João", 321321321)


cliente1.depositar(4000)
cliente1.sacar(1500)


cliente1.transferir(500, cliente2)

// não será posssível sobreescrever o método qu e informa o saldo, porque ele tem um set.
// cliente1.saldo = 2050


// perceba que para os getters em setters, não precisa underline. Apenas nas variaveis
console.log(cliente1.saldo)
console.log(cliente1.cpf)


