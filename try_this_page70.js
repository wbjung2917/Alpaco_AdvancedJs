const arr = [1, 2, -3, -4, 5];

const square = (n) => {
  return (num) => num ** n;
};

const functions = [square(2), Math.sqrt, square(3)];
//console.log(arr.map((x) => Math.sqrt(x ** 2) ** 3));
const miniRPA = (f_list, init) => f_list.reduce((pre, f) => pre.map(f), init);
const result = miniRPA(functions, arr);
console.log(result);
