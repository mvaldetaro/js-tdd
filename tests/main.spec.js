const { expect } = require('chai');

describe('Main', () => {
  let arr;
  // roda uma vez, antes do bloco
  before(() => {
    // pode iniciar uma conexão
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // pode encerrar uma conexão
    // apagar um conjunto de dados
  });

  // roda todas as vezes antes de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes depois de cada bloco
  afterEach(() => {});

  // (smoke test), testar, funções, variaveis existem ou se são do tipo esperado
  it('deve ser uma array', () => {
    expect(arr).to.have.a('array');
  });

  it('deve ter o tamanho 4 quando colocar outro valor no array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('deve ter o tamanho 2 quando remover um valor deste array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('deve remover o valor 3 quando usar pop neste array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('deve retornar true quando pop igual a 3', () => {
    expect(arr.pop()).to.equal(3);
  });
});
