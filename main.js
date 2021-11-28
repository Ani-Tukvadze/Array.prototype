const arr = [14, 2, 45, 13, 54, 66, 21, 40];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min);
console.log(max);




let x = myFunction(2, 3);
function myFunction(a, b) {
    return a ** b;
}
console.log(x);


let x = myFunction(5, 6);
function myFunction(a, b) {
    return a ** b;
}
console.log(x);





let x = (a, b) => {
    let result = a ** b;
    return result;
}

let result1 = x( 2 ,3)
console.log(result1);


let x = (a, b) => {
    let result = a ** b;
    return result;
}

let result1 = x( 5, 6)
console.log(result1);
  


const arr = [ 4, 5, 11, 2, 9, 99, 1092, 1];
const sorted = arr.slice().sort((a,b)=> a-b);
console.log(sorted);

const numArray = [ 4, 5, 11, 2, 9, 99, 1092, 1];
numArray.sort((a, b) => Math.sign(a - b))
console.log(numArray);



let arr = [ 4, 5, 11, 2, 9, 99, 1092, 1];
let evens = arr.filter(function(x) {
    if ( x % 2 === 0 || x === 0) {
        return x;
    }

});
console.log(evens);




let arr = [ 4, 5, 11, 2, 9, 99, 1092, 1];
let filtered = arr.filter(function(element, index, array){
    return (index % 2 === 0);
});





let arr = [4,2,1092];
let reducer = (previousValue, currentValue) => previousValue * currentValue;
console.log(arr.reduce(reducer));





let arr = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB'];
let capitalize = arr.map(arr => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase());
console.log(capitalize);


let newArr = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB'];
for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase();
};
console.log(newArr);
