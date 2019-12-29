// calc
const sum = (pN1, pN2) => pN1 + pN2;
const sub = (pN1, pN2) => pN1 - pN2;
const mult = (pN1, pN2) => pN1 * pN2;
const div = (pN1, pN2) => ((pN2 === 0) ? 'Não é possível dividir por zero!' : pN1 / pN2);

export {
  sum, sub, mult, div,
};
