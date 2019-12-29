import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('calc', () => {
  describe('smoke tests', () => {
    it('deve existir o método "sum"', () => {
      expect(sum).to.not.undefined;
      expect(sum).to.be.a('function');
    });
    it('deve existir o método "sub"', () => {
      expect(sub).to.not.undefined;
      expect(sub).to.be.a('function');
    });
    it('deve existir o método "mult"', () => {
      expect(mult).to.not.undefined;
      expect(mult).to.be.a('function');
    });
    it('deve existir o método "div"', () => {
      expect(div).to.not.undefined;
      expect(div).to.be.a('function');
    });
  });

  describe('sum', () => {
    it('deve retornar 4 quando sum(2,2) ', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('sub', () => {
    it('deve retornar 4 quando sub(6,2) ', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it('deve retornar -4 quando sub(6,10) ', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });
  describe('mult', () => {
    it('deve retornar 4 quando mult(2,2) ', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
  describe('div', () => {
    it('deve retornar 4 quando div(8,2) ', () => {
      expect(div(8, 2)).to.be.equal(4);
    });
    it('deve retornar "Não é possível dividir por zero!" quando div(4,0) ', () => {
      expect(div(4, 0)).to.be.equal('Não é possível dividir por zero!');
    });
  });
});
