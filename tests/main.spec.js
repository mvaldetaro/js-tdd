const { expect } = require('chai');
const calc = require('../src/main');

describe('calc', () => {
  describe('smoke tests', () => {
    it('deve existir a lib calc', () => {
      expect(calc).to.exist;
    });
    it('deve existir o método "sum"', () => {
      expect(calc.sum).to.not.undefined;
      expect(calc.sum).to.be.a('function');
    });
    it('deve existir o método "sub"', () => {
      expect(calc.sub).to.not.undefined;
      expect(calc.sub).to.be.a('function');
    });
    it('deve existir o método "mult"', () => {
      expect(calc.mult).to.not.undefined;
      expect(calc.mult).to.be.a('function');
    });
    it('deve existir o método "div"', () => {
      expect(calc.div).to.not.undefined;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('sum', () => {
    it('deve retornar 4 quando calc.sum(2,2) ', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });
  describe('sub', () => {
    it('deve retornar 4 quando calc.sub(6,2) ', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
    it('deve retornar -4 quando calc.sub(6,10) ', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });
  describe('mult', () => {
    it('deve retornar 4 quando calc.mult(2,2) ', () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });
  describe('div', () => {
    it('deve retornar 4 quando calc.div(8,2) ', () => {
      expect(calc.div(8, 2)).to.be.equal(4);
    });
    it('deve retornar "Não é possível dividir por zero!" quando calc.div(4,0) ', () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível dividir por zero!');
    });
  });
});
