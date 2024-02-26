/** @format */

// /** @format */

// function func12<T>(value: T): T {
//   return value;
// }

// const num2 = func12(10);
// console.log(num2);

// const string2 = func12("에헴");
// console.log(string2);
// console.log(typeof string2);

// type USer<T> = {
//   name: T;
//   age: T;
// };

// const user134: USer<string | number> = {
//   name: 123,
//   age: "!23",
// };

// function test54<T, U>(name: T, age: U): void {
//   console.log(`${name},${age}`);
// }

// test54("진재환", true);

// type TEST<T, U> = {
//   name: T;
//   age: U;
// };

// const test123: TEST<string, boolean> = {
//   name: "123",
//   age: true,
// };

// console.log(test123);

// const swap = <T>(a: T, b: T): [T, T] => {
//   return [b, a];
// };

// const [a, b] = swap(1, 2);
// console.log(a, b);
// const swap2 = <T, U>(a: T, b: U): [U, T] => {
//   return [b, a];
// };
// const [ab, ba] = swap2(1, "wls");
// console.log(ab, ba);

// function array<T>(data: T[]) {
//   return data[0];
// }

// let array1 = array([1, 2, 3]);
// console.log(array1);

// function func<T>(data: [T, ...unknown[]]) {
//   return data[0];
// }

// function func2<T>(data: [T, ...unknown[]]) {
//   return (data[0] as number).toFixed();
// }
// const test = func2([1, 2, "#"]);
// const test2 = func(["123", 2, 3]);

// function test<T>(data: T) {
//   return data.length;
// }
// function test2<T extends { length: number }>(data: T) {
//   return data.length;
// }

// let test1 = test2("123");
// let test4 = test2([1, 2, 3]);
// // let test3 = test2(10);
// console.log(test1, test4);

// const arr = [1, 2, 3];

// function map<T>(arr: T[], callback: (item: T) => T): T[] {
//   let result: T[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// map(arr, (it) => it * 2);
// interface KeyPair<T, V> {
//   key: T;
//   value: V;
// }

// 이렇게만하면 에러뜬다 -> KeyPair interface의 매개변수 타입을 지정 해줘야함
// let keyPair: KeyPair = {};

// 이런식으로
// let keyPair: KeyPair<string, number> = {
//   key: "key",
//   value: 0,
// };

// interface User<T> {
//   [key: string]: T;
// }

// let user1: User<string> = {
//   2: "재환", // TS에서 2를 강제로 string 취급 이유는 모름;;
//   number: 123,
//   age: 123,
//   url: "213213@213123",
// };

// let user2: User<number> = {
//   age: 123,
//   tall: 232141,
// };

// type Student = {
//   job: "student";
//   school: string;
// };

// type Developer = {
//   job: "developer";
//   skill: string;
// };

// type User = {
//   name: string;
//   profile: Student | Developer;
// };

// function whoAreYou(user: User) {
//   if (user.profile.job === "student") {
//     console.log(`${user.name}님 ${user.profile.school}가셔야죠`);
//   } else {
//     console.log(`${user.name}님 ${user.profile.skill}밖에 사용 못하시나요?`);
//   }
// }

// whoAreYou({ name: "재환", profile: { job: "developer", skill: "JavaScript" } });

interface User<T> {
  name: string;
  age: number;
  profile: T;
}
