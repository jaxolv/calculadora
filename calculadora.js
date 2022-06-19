/* Todas as funções da calculadora importadas: */
import somar from './somar.js'
import subtrair from './subtrair.js';
import {multiplicar} from './multiplicar.js';
import {dividir} from './dividir.js';
import fatorial from "./fatorial.js";
import {par} from './parOuImpar.js';
import {impar} from './parOuImpar.js';

console.log(somar(10, 5))
console.log(subtrair(10, 5))
console.log(multiplicar(10, 5))
console.log(dividir(10, 5))
console.log(fatorial(5))
console.log(par(10))
console.log(impar(10))