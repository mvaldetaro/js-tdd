describe('Main', () => {
  describe('Soma', () => {
    context.only('Caso 1', () => {
      it('Deveria somar 2 + 2 e retornar 4', () => {
        // esperado a acontecer
        throw new Error('Somente um erro');
      });
    });
  });

  describe('Subtração', () => {
    context.skip('Caso 2', () => {
      it('Deveria subtrair 2 - 2 e retornar 0', () => {
        // esperado a acontecer
        throw new Error('Somente um erro');
      });
    });
  });
});
