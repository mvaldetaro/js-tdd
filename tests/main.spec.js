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
  afterEach(() => {

  });


  it('deve ter o tamanho 4 quando colocar outro valor no array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('deve ter o tamanho 2 quando remover um valor deste array', () => {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('deve remover o valor 3 quando usar pop neste array', () => {
    console.log(arr.pop() === 3); // true
  });

  // describe('Soma', () => {
  //   context('Caso 1', () => {
  //     it('Deveria somar 2 + 2 e retornar 4', () => {
  //       // esperado a acontecer
  //       throw new Error('Somente um erro');
  //     });
  //   });
  // });

  // describe('Subtração', () => {
  //   context('Caso 2', () => {
  //     it('Deveria subtrair 2 - 2 e retornar 0', () => {
  //       // esperado a acontecer
  //       throw new Error('Somente um erro');
  //     });
  //   });
  // });
});
