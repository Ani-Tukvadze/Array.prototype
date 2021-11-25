//Array.prototype.splice()
//splice მეთორი ცვლის მასივის შიგთავსს ელემენტების ამოღებით, ჩანაცვლებით ან დამატებით.
// let apps = ['facebook', 'instagram','twitter', 'snapchat']
// let removed = apps.splice(2,0, 'whatsApp');
// console.log(apps);

// let animals = ['dog', 'cat', 'horse', 'bear', 'squirrel']
// let removed = animals.splice(0, 3, 'raccoon', 'hedgehog');
// console.log(animals);


//Array.prototype.filter()
//filter მეთოდი ქმნის ახალ array-ს სადაც მოცემულია ის ელემენტები რომელიც აკმაყოფილებს ახალ მოთხოვნას.
// let numbers = [10, 15, 25, 35, 45, 55]
// let hightNumbers = numbers.filter(function(number) {
//     return number > 35;
// });

// console.log(hightNumbers);


// let names = ['mari', 'nika', 'giorgi', 'elene', 'ani']
// let someNames = names.filter(function(names) {
//     return names.length > 4 
// });
// console.log(someNames);


//Array.prototype.push()
//push მეთოდი ამატებს ახალ ელემენტს მასივის ბოლოში.
// let clothes = ['pants', 'blouse', 'jacket', 'sweater']
// let total = clothes.push('t-shirt', 'coat', 'scarf');
// console.log(clothes);

// let jewellery = ['earring', 'bracelet', 'ring', 'necklace']
// let total = jewellery.push('watch');
// console.log(jewellery);

// const age = 19;
// const vaccinated = true;
// if (age > 18 && vaccinated) {
//     console.log('Yes');

// } else {
//     console.log('No');
// } 


// const age = 21;
// const vaccinated = true;

// if (age < 10) {
//     console.log('child');

// } else if (age < 20) {
//     console.log('teen');

// } else {
//     console.log('adult');
// } 

// const age = 50;
// const vaccinated = true;

// if (age >  10 && age < 50 || vaccinated) {
//     console.log('Yes');

// } else {
//     console.log('No');
// } 

// const age = 50;
// const vaccinated = true;

// if (age >  50 && (age < 10 || vaccinated)) {
//     console.log('Yes');

// } else {
//     console.log('No');
// } 

// (5 >3) && (console.log('Yes'));

// let numbers = [14, 2, 45, 13, 54, 66, 21, 40];
// let min = numbers[2];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log('Min is:'+ min);

// const arr = [14, 2, 45, 13, 54, 66, 21, 40];
// const min = Math.min(...arr);
// const max = Math.max(...arr);
// console.log(min);
// console.log(max);

// let x = myFunction(2, 3);
// function myFunction(a, b) {
//     return a ** b;
// }
// console.log(x);


// let x = myFunction(5,6);
// function myFunction(a, b) {
//     return a ** b;
// }
// console.log(x);



// let x = (a, b) => {
//     let result = a ** b;
//     return result;
// }

// let result1 = x( 2 ,3)
// console.log(result1);


// let x = (a, b) => {
//     let result = a ** b;
//     return result;
// }

// let result1 = x( 5, 6)
// console.log(result1);
  