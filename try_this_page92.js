const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (set1, set2) =>
  //new Set(set1.filter((e) => new Set(set2).has(e))); //new가 많이 반복되니 낭비가심함
  new Set(
    set1.filter((e) => {
      const tempSet = new Set(set2);
      return tempSet.has(e);
    })
  );
//const intersect = (set1, set2) => new Set(set1.filter((e) => set2.includes(e)));
console.log(intersect(A, B)); // 1, 3, 5
console.log(intersect(A, C)); // 3, 4

const diff = (set1, set2) => new Set(set1.filter((e) => !new Set(set2).has(e)));
//const diff = (set1, set2) => new Set(set1.filter((e) => !set2.includes(e)));
console.log(diff(A, B)); // 2, 4
console.log(diff(B, A)); // 22, 44
console.log(diff(A, C)); // 1, 2, 5
console.log(diff(B, C)); // 1, 22, 44, 5

const union = (set1, set2) => new Set([...set1, ...set2]);
console.log(union(A, B)); // 1, 2, 3, 4, 5, 22, 44
console.log(union(A, C)); // 1, 2, 3, 4, 5, 11, 222, 555
