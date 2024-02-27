/** @format */

// type A = number extends 10 ? string : number;
// type B = 10 extends number ? string : number;

// const a: A = 10;
// const b: B = 10;

// type A<T> = T extends string ? string : boolean;

// const a: A<string> = "sr";
// const b: A<number> = true;

// type Check<T> = T extends string ? string : undefined;

// function replace<T>(text: T): T extends string ? string : undefined;

// function replace(text: any) {
//   if (typeof text === "string") {
//     const newText = text.replace(/ /g, "");
//     return newText;
//   } else {
//     return alert("놉!");
//   }
// }

// const result = replace("아 하 아");
// console.log(result);

type Excludee<T, U> = T extends U ? never : T;

type A = Excludee<number | string | boolean, string>;
