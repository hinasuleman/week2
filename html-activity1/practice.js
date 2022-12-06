//html and css recap in class activities
//day1  


 // let myString = "The lazy brown dog jumped";

// const reverseStr = (str) => {
//   const strArray = str.split("");
//   const reverseStr = strArray.reverse();
//   const strJoin = reverseStr.join("");

//   return strJoin;
// }

// console.log(reverseStr(myString));


/////////////// another way of writting it is 

// let myString = "The lazy brown dog jumped";

// const reverseStr = (str) => {
//   const strArray = str.split("");
//   const reverseStr = strArray.reverse();
//   const strJoin = reverseStr.join("");

//   return strJoin;
// }

// console.log(reverseStr(myString));

/////////////reverse string with a for loop 

// function reverseString(string){
//   let reverseString="";
//   for (i=0;i<string.length;i++){
//     reverseString+=string.charAt(string.length-i-1)
//   }
//   return reverseString
// }
// console.log(reverseString("alphabet"))

// RECAP JAVASCRIPT Afternoon session - During the CSS class! 

// Exercise Declare an array that stores a shopping list 
// This array should have 3 categories (arrays)
// of the shopping items and each of these should
// have at least 3 items in them

//log the 3rd item of the 2nd list to the console

//Day 2 array in class recap


// let shoppingList = new Array();

// shoppingList[0] = new Array("potatoes", "carrots", "peas");
// shoppingList[1] = new Array("bananas", "apples", "grapes");
// shoppingList[2] = new Array("cheese", "milk", "yoghurt");

// console.log(shoppingList);
// console.log(The third item of the second list is ${shoppingList[1][2]});

// // Another way of doing it 
// let fruit =  ["Apples","Oranges","Pears"];
// let meat =  ["Beef","Pork","Lamb"];
// let veg = ["Carrots","Leeks","Onions"];
// let itemArray = [fruit,meat,veg];

// console.log(itemArray[1][2])

// /// Third way of doing it 
// let shoppingList = [
//   ["Apples","Oranges","Pears"],
//   ["Beef","Pork","Lamb"],
//   ["Carrots","Leeks","Onions"]
// ]
// console.log(shoppingList[1][2]);




