// 論理積（&&） 
// falsyな値があればその値を返す。全てtruthyな値であれば最後の値を返す。
const resultA = "" && "文字列";
const resultB = 2 && 0;
const resultC = "foo" && 4;

console.log(resultA);
console.log(resultB);
console.log(resultC);

// 論理和（||）
// truthyな値があればその値を返す。
const resultD = "" || "文字列";
const resultE = 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);