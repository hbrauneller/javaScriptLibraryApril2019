// //arrays
// let newArr = ['Brie', 17, true, {kethcup: true, pickles: false, meat: true}];
// //arrays have numbered elements. The numbers are index-es and the values
// //are the elements
// console.log(newArr[3])
// newArr[3].pickles = true;
// console.log(newArr[3]);

// //newArr[3] = 'zack is one bad dude with styling';
// //console.log(newArr[3]);

// //conditionals 
// let isRainy = true;
// let isWarm = true;
// if (isRainy){
// console.log("bring your unbrella");
// } else {
//     console.log('leave the umbrella at home');
// }

// if (isWarm) {
//     console.log('wear shorts')
// } else {
//     console.log('wear a parka')
// }

// let gpas = [1.9, 3.5, 4,0, 2.8];
// let singleGpa = gpas[1]

// if (singleGpa ==4.0){
//     console.log('wow! that is amazing!');
// } else if (singleGpa >= 3.0){
//     console.log('that is a strong Gpa!');
// } else {
//     console.log('...eh, you might wanna hit the books');
// }

// /*
// Challenge 1
// */

// let numbers = [15, 23, 45, 82, 97]
// let indexNum = 3

// if (indexNum ==0){
//     oreo [0] **= 
// } else if (numbers >=[0]);

// let movie =  {
//     nameOfMovie: "The Godfather",
//     runTime: 95,
//     characters: {
//         let donCorleone = {
//             name: "donCorleone1",
//             age: 75,
//             let items = {
//                 name: "cannolis",
//                 color: 'beige'
//             }
//         }
//         let Michael =  {
//             name2: "michaelSon",
//             age2: 30,
//             let items2 = {
//                 name2: "gun"
//                 color2: 'black'
//             }
//         }
//     genre: "drama",
// }
// console.log(nameofMovie,donCorleone, Michael, age2, color, color2);

// let lotrObj = {
//     nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
//     runTime: 'long',
//     characters: {
//         charOne: {
//             name: 'Legolas',
//             age: 2931,
//         },
//         charTwo: {
//             name: 'Gandalf',
//             age: 2019,
//         }
//     },
//     genre: 'Action & Adventure'
// }

// console.log(lotrObj.characters.charOne.age);

/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:*/
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;
//"undefined"

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}
/*actual:
fundction hoistTest(){
    console.log(first);
}
var first;
hoistTest();
first= 5
*/
//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
//