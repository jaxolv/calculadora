/* Todas as funções da calculadora importadas: */
import somar from './modules/somar.js'
import subtrair from './modules/subtrair.js';
import {multiplicar} from './modules/multiplicar.js';
import {dividir} from './modules/dividir.js';
import fatorial from "./modules/fatorial.js";
import {par} from './modules/parOuImpar.js';
import {impar} from './modules/parOuImpar.js';

console.log(somar(10, 5))
console.log(subtrair(10, 5))
console.log(multiplicar(10, 5))
console.log(dividir(10, 5))
console.log(fatorial(5))
console.log(par(10))
console.log(impar(10))