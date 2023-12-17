function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
return sum;
}

function differenceMaxMinWorker(...arr) {
if(arr.length === 0) {
  return 0;
}
let max = Math.max(...arr);
let min = Math.min(...arr);
return max - min;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
arr.forEach((elem) => {
  if(elem % 2 === 0) {
    sumEvenElement += elem;
  } else sumOddElement += elem;
})
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
if (arr.length === 0) {
  return 0;
}
arr.forEach((elem) => {
  if(elem %2 === 0) {
    sumEvenElement += elem;
    countEvenElement ++;
  }

} )
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
