// // Start  time 5:25

// //  --------  PUSH()-------
// // Array.prototype.push()
// //the push() method add one or more elements to the
// // end of an array and returns the new length of the array.

// // const animals =["buffalo","goats","sheep"];

// // animals.push("chicken","cow","cats");
// // console.log(animals);

// //push()method last me add karta ha

// // --------------------------------------------

// //            unshift()
// //unshift()start me add karta ha

// //the unshift() method adds one or more elemnts to
// //  the begining of an array & returns the new length of the array.

// const  animals = ["buffalo","goats","sheep"];

// animals.unshift("chicken");
// console.log(animals);
// //for count length of an array
// const count = animals.unshift();

// console.log(count);

// // // 2nd Example

// // const myNumbers =[1,2,3,4,6];
// // console.log(myNumbers.unshift(4,6));
// // console.log(myNumbers);

// // -----------------------------------------------------------------

// //         ---   POP()

// // the pop removes the last elemnet from an array and returns 
// //that elemnts.

// const animal = ["sheep", "Bufalo","cow","goat","cats"]; // 
// console.log(animal);
// animal.pop();
// console.log(animal);// it removes cat b/c its a last elemnt

// // ---------------------------------------------------------------------

// ----       shift()
// shift( ) removes the first elemnt  from an array and returns that
//removed elemnt. this method  changes the length of the array.

// const animal = ["sheep", "Bufalo","cow","goat","cats"]; // 
// console.log(animal);

// animal.shift();
// console.log(animal);//its remove first elemnt


// -----------------------------------------------------------------------------

//  ----     CHALLENGE TIME ----

// Questions
// 1. Add Dec at the end of an Array.? 
// 2. what is the  return value of a splice method.?
// 3. update march to March (update)?
// 4. delete June from an array?
// using one method  

//  -------- Splice()---
// Adds  and /or removes elemnts from an array.

// const months =["jan","march","april" ,"june","July"];

/////---- solution 1

// const newMonth= months.splice(months.length,1,"november");// first=>choose,second=>delete,third=>add
// // console.log(months);

// /////---- solution 2
// console.log(newMonth); // answer []

//// ----solution 3  =>update march to "March"

const months = ["jan", "march", "april", "june", "July"];

const indexOfMonth =months.indexOf("march");// for check index number
if(indexOfMonth !=  -1 ){
    const updateMonth = months.splice(indexOfMonth, 2, 'March');
}else{
    console.log("No data found");
}
// const updateMonth = months.splice(1, 1, 'March');

console.log(months);

