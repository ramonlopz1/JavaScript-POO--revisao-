import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345555)
diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Ricardo", 5000, 392932939293)
gerente.cadastrarSenha("123")


const estaLogado = SistemaAutenticacao.login(diretor, "123456789")

console.log(estaLogado)