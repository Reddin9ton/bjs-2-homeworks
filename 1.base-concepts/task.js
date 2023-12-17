"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = (b**2) - 4 * a * c;

  if (discr === 0) {
   let rootOneForm = -b / (2 * a);
    arr = [rootOneForm];

  }

  if (discr > 0) {
   let rootOneForm = (-b + Math.sqrt(discr) )/(2*a);
   let rootTwoForm = (-b - Math.sqrt(discr) )/(2*a);
    arr = [rootOneForm, rootTwoForm];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  return Number((payment * countMonths).toFixed(2));

}