
// :- [const obj for product (start) ]

// const product = {
//     name: "Laptop",
//     price: 999.99,
//     inStock: true,
//     rattings: 4.5,
// }
// console.log(product);

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

// Conditional operators ( Dark and light mode)

// {
//     let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
//  else {
//     color = "white";
// }

// console.log("color :", color);
// }

// Conditional operators ( Odd and Even)

// {
// let num = 7;
// let result;
// if (num % 2 === 0) {
//     result = "Even";
// } else {
//     result = "Odd";
//     console.log("result :", result);
// }

// }
 
// Conditional operators ( Weather Report)
{
let temp = 70;

if (temp < 10) {
console.log("weather : Cold");
} 
else if (temp >= 10 && temp <= 30) {
console.log("weather : Warm");
} 
else if (temp <= 35) {
console.log("weather : Hot");
} 
else {
console.log("weather :","Diseaster Alert");
}

}