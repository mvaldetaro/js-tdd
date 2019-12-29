// calc
module.exports = {
  sum: (pN1, pN2) => {
    return pN1 + pN2;
  },
  sub: (pN1, pN2) => {
    return pN1 - pN2;
  },
  mult: (pN1, pN2) => {
    return pN1 * pN2;
  },
  div: (pN1, pN2) => {
    return pN2 === 0 ? 'Não é possível dividir por zero!' : pN1 / pN2;
  }
};
