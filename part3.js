//Sum to zero
let arr = [1, 2, 3, -2];

function addToZero(arr) {
let caseTrue = 0;
let caseFalse = 0;

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j + 1] === 0) {
        caseTrue ++;
      } else {
        caseFalse ++;
      }
    }
  }

if(caseTrue >= 1) {
    return true;
  } else {
    return false;
  }
};

console.time('sum')
console.log(addToZero(arr));
console.timeEnd('sum')

//Run time is console loged as - 26.951ms - as a double loop this has a time complexity of O(n^2) - this is not an ideal solution
// I would like to convert this to a sort method and give that a shot but I have zero experience with sort methods

//below is an attempt to use a cloned array to test conditions

let arr2 = [3, 5, 6, -5]

function sumQuicker(arr) {
    let isTrue = 0;
    let isFalse = 0;
    let cloneArr = [...arr];

    for(let i = 0; i < arr.length; i++) {
        cloneArr[i] === arr[i];
    for(let j = 0; j < arr.length; j++) {
    if(arr[j] + cloneArr[i + 1] === 0) {
        isTrue ++;
    } else {
        isFalse ++
    }
}
    }
    if(isTrue >= 1) {
        return true;
    } else {
        return false;
    }
}


console.time('quicker');
console.log(sumQuicker(arr2));
console.timeEnd('quicker');

//turns out this is much faster - 1.225