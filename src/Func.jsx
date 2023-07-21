const operators = ["/", "*", "+", "-"];

// cheecking for x-multiply symbol change & double operators change to single operator
// calculating final value
export const Eval = (str) => {
  let arr = [...str];
  arr.forEach((element, index) => {
    if (element === "x") {
      arr[index] = "*";
    }
  });
  console.log("arr=", arr);
  //get opertors list
  let arrMod = [];
  arr.forEach((element, index) => {
    if (arrMod.length >= 1) {
      if (operators.includes(element)) {
        if (operators.includes(arrMod[index - 1])) {
          arrMod.pop();
        }
      }
    }
    arrMod.push(element);
  });
  console.log("arrMod-", arrMod);
  return eval(arrMod.join("")).toString();
};

// checking for double zero and decimal
export const checkConditions = (prevValue, newKey) => {
  if (prevValue.length > 0) {
    // console.log(prevValue.length);
    let prevArr = [...prevValue];
    let len = prevArr.length;
    if (len === 1) {
      if (prevArr[0] === "0" && newKey === "0") {
        return prevValue;
      }
    }
    if (newKey === ".") {
      if (prevArr[len - 1] === ".") {
        return prevValue;
      }
      if (prevArr[len - 2] === ".") {
        return prevValue;
      }
    }
  }
};

//if 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).  ISSUE ONLY IN 2ND OPERATOR DIVIDE/MULTIPLY
//Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
//decimal precision of at least upto 4 decimal places
// if eval is not due right format, display output, please correct input
