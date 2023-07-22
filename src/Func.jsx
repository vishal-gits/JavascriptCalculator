const operators = ["/", "*", "+", "-"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

// cheecking for x-multiply symbol change & double operators change to single operator
// calculating final value
export const Eval = (str) => {
  let arr = [...str];

  arr.forEach((element, index) => {
    if (element === "x") {
      arr[index] = "*";
    }
  });

  //Checking for double operator & subtract symbol condition
  arr.reverse();

  let arrMod = [];
  arr.forEach((element, index) => {
    if (operators.includes(element)) {
      if (nums.includes(arr[index - 1])) {
        arrMod.push(element);
      } else if (arr[index - 1] === "-" && nums.includes(arr[index - 2])) {
        arrMod.push(element);
      }
    } else if (nums.includes(element)) {
      arrMod.push(element);
    }
  });
  arrMod.reverse();

  return eval(arrMod.join("")).toString();
};

export const checkDecimal = (prevValue, newKey) => {
  if (prevValue.length > 0) {
    let prevArr = [...prevValue];
    let len = prevArr.length;
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

// checking for double zero and decimal
export const checkConditions = (prevValue, newKey) => {
  if (prevValue.length > 0) {
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
