/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número
 */

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('deve retornar `Fizz` quando multiplo de 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('deve retornar `Buzz` quando multiplo de 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });
  it('deve retornar `FizzBuzz` quando multiplo de 3 e 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('deve retornar quando não for multiplo de 3 ou 5', () => {
    expect(FizzBuzz(2)).to.be.equal(2);
  });
});
