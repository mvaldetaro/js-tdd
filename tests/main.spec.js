describe('Main', () => {
  // roda uma vez, antes do bloco
  before(() => {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log('after');
  });

  // roda todas as vezes antes de cada bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  // roda todas as vezes depois de cada bloco
  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('Teste 1');
  });

  it('test 2', () => {
    console.log('Teste 2');
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
