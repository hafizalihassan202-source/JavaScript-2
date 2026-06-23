
// :- [const obj for product (start) ]

// const product = {
//     name: "Laptop",
//     price: 999.99,
//     inStock: true,
//     rattings: 4.5,
// }
//  console.log(product);

// [const obj for product (end) ]


// :- [const obj for profile (start) ]

// const profile = {
//     name: "Ali HAssan",
//     age: 18,
//     country: "Pakistan",
//     city: "FAisalabad",
//     profession: "Web Developer",
//     followers: 5000,
// }
// console.log(profile.city);
// console.log(profile);

// [const obj for profile (end) ]

// :- Arthematic Operators

// {
// let a = 10;
// let b = 5;
// console.log("a+b =", a+b);
// console.log("a-b =", a-b);
// console.log("a*b =", a*b);
// console.log("a/b =", a/b);
// console.log("a%b =", a%b);
// console.log("a^b =", a**b);
// console.log("++a =", ++a);
// console.log("--b =", --b);
// console.log("a++ =", a++);
// console.log(a);
// }

// :- Short HAnd Assignment Operartors

// {
// let x = 10;
// let y = 8;
// console.log("x+y =", x+=y);
// console.log("x-y =", x-=y);
// console.log("x*y =", x*=y);
//  console.log("x/y =", x/=y);
//  console.log("x%=y =", x%=y);
// }

// :- Comparison Operators

// {
//     let a = 0.3;
//     let b = "0.3";
//     console.log("a==b :", a==b);
//     console.log("a!=b :", a!=b);
//     console.log("a===b :", a===b);
//     console.log("(a===b) :", !(a===b) );
//     console.log("a>b :", a>b);
//     console.log("a<b :", a<b);
//     console.log("a>=b :", a>=b);
//     console.log("a<=b :", a<=b);
//     console.log("a!>=b :", !(a>=b));

// }

// :- Logical Operators

// {
//     let a = 5;
//     let b = 10;

//     let cond1 = (a < b);  // true
//     let cond2 = (a > b);  // false
//     let cond3 = (a == b); // false
//     let cond4 = (a != b); // true
//     console.log("cond1 && cond2 :", cond1 && cond2); 
//     console.log("cond3  || cond4 :", cond3 || cond4);
// }

// :- Conditional operators ( Dark and light mode)

// {
//     let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
//  else {
//     color = "white";
// }


// console.log("color :",color);
// }

// :- Conditional operators ( Odd and Even)

// {
// let num = 221;
// let result;
// if (num % 2 === 0) {
//     result = "Even";
// } else {
//     result = "Odd";
// }
//     console.log("result :", result);

// }
 
// :- Conditional operators ( Weather Report)

// {
// let temp = 70;

// if (temp < 10) {
// console.log("weather : Cold");
// } 
// else if (temp >= 10 && temp <= 30) {
// console.log("weather : Warm");
// } 
// else if (temp <= 35) {
// console.log("weather : Hot");
// } 
// else {
// console.log("weather :","Diseaster Alert");
// }

// }

// :- Ternary Operator ( Weather Report )

// {
// let weather = 9;
// let result = (weather <= 20  ) ? "Weather is good today." : "Weather seems to be hot today." ;
// console.log("result :", result);
// }

// :- Display a number, is it a multiple of 5 or not.

// {
//     let num = prompt("Enter a number:");
//     if (num % 5 === 0) {
//         console.log( num," is a multiple of five.");
//     } else {
//         console.log(num,"is not a multiple of five.");
// }
// }

// :- Display the weather report based on temperature input from user

// {
//     let temp = prompt("Enter the temperature:");
//     if (temp <= 10) {
//         console.log("Weather: Cold");
// } else if (temp > 10 && temp <= 30) {
//         console.log("Weather: Warm");
// } else {
//         console.log("Weather: Hot");
// }
// }

// :- Check the grades on the bases of score input from user

// {
//     let grade = prompt("Enter your score:");
//     if (grade >= 90 && grade <= 100) {
//         console.log("Hey! You got an A");
// } else if (grade >= 80 && grade < 90) {
//         console.log("Grade: B");
// } else if (grade >= 70 && grade < 80) {
//     console.log("Grade: C");
// } else if (grade >= 60 && grade < 70) {
//     console.log("Grade: D");
// } else  {
//     console.log("Grade: YOu are Fail");
// }
// }

// :- for loop

// let n =0;
// for (let i = 1; i <= 5; i++) {
//     n = n + i;
// }
// console.log("Sum :", n);

// :- while loop

// let i=1;
// while (i <=5) {
//     console.log("i :", i);
//     i++;
// }

// :- All even numbers between 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log("Even Number :", i);
//     }
// }

// //:- create a game in which user have to guess a number written by a programer
// {
// let n=16202;
// let guess = prompt("Enter your password.");
// while (guess != n) {
//     guess = prompt("Wrong PAssword! Try again:");
// }
// console.log("The page is open.");
// }

// :- Login Method with correct password

// {
// let n=16202;
// let v= prompt("Enter Password:");
// while(v!=n){
//     v= prompt("Wrong Password! Enter Again:");
// }
// alert("Correct Password! Access Granted.");
// console.log("Access Granted");
// }

// :- Strings 

// let str="Hello";
// console.log(str[0]); // [] it shows the index of the string and it starts from 0

// :- Template Literals

// let obj = {
 //     name: "Ali Hassan",
 //     age: 18,
 // }

// let output = `My name is ${obj.name} and I am ${obj.age} years old and my salary is ${5700+67000}.`;
// console.log(output);

// :- Escape Sequences ( New line, Tab, Backslash )

// let str = "Ali\nHAssan";
// console.log(str);

// :- String Methods ( toUpperCase, toLowerCase, trim )


// let str = "Ali\nHAssan";
// console.log(str);
//  let newStr = str.toUpperCase();
//  console.log(newStr);
 

// // :- String Methods ( slice, concat, replace, charAt )
 1 // {
// let str = "Hello World!";
// // let slicedStr = str.slice(3, 8);
// // console.log("Sliced String :", slicedStr);
// // }
 2
// let str1 = "Hello World!";
// let str2 = " 'Welcome to JavaScript' ";
// let str3 = str1.concat(str2);
// console.log("Concatenated String :", str3);
// console.log(str1.replace("World", "Everyone"));

// :-TAke full name from user and make its user name

// let fullName = prompt("Enter your full name without spaces:"); 
// let userName = "@" + fullName.toLowerCase() + fullName.length; 
// console.log("Your username is :", userName);


// :- Array

// let marks = [85, 90, 78, 92, 88];
// console.log(marks); 
// console.log(marks[4]);
// marks[2] = 80;
// console.log(marks);


// Q#1 calculate the average of marks


// let marks = [85, 90, 78, 92, 88];
// let sum = 0;
// for (let mark of marks) {
//     sum += mark;
// }
// let average = sum / marks.length;
// console.log(`Average of marks is: ${average}`); // template litteral may number beh string may convert krta hai isliye ${} ka use krte hain


// Q#2 Apply 10% offer on all product items.

// let prices = [100, 200, 300, 400, 500];

// for (let i = 0; i < prices.length; i++) {
// let offer = prices[i] / 10;
// prices[i] = prices[i] - offer;
// }
// console.log("Prices after 10% offer:", prices);