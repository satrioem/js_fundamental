/*
//Create Function
const perkalian = (a, b) => {
  const c = (a *= b);
  return c;
};

function pembagian(d, e) {
  const f = d / e;
  return f;
}

//Call the function
console.log(perkalian(4, 5));
const hasil_pembagian = pembagian(20, 10);
console.log(hasil_pembagian);

//CARA SINGKAT
const penjumlahan = (x, y) => x + y;
const hasilpenjumlahan = penjumlahan(20,30);
console.log(hasilpenjumlahan);
*/

//2
const multiple = (x, y) => (x *= y);
const multipleresult = multiple(8,16);
console.log(multipleresult);

const division = (multipleresult, z) => multipleresult / z;
const divisionresult = division(multipleresult, 5);
console.log(divisionresult);

const addition = (divisionresult, i) => divisionresult + i;
const additionresult = addition(divisionresult, 2);
console.log(additionresult);

