/** @format */

function introduce(name: string, age: number): void {
  console.log(`${name}은 ${age}살`);
}
introduce("진재환", 10);

const hihihi = (name: string, age: number) => {
  console.log(`${name}, ${age}`);
};

hihihi("진재", 10);

const byebye = (name, age) => {
  console.log(name, age);
};

byebye("진재", 123);

type greet = (name: string, age: number) => string;
type greet2 = { (name: string, age: number): string };

// type AddFunc = (a: number, b: number) => number;
// type SubFunc = (a: number) => number;

// const add: AddFunc = (a, b) => a + b;
// const sub: AddFunc = (a) => a - 1;

// add(2, 1);
// sub(1);

// - 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;
// 오버로드 시그니쳐는 선언부와 구현부가 붙어 있어야한다.
// 실제 구현부 - 구현 시그니처
function func(a: number, b?: number, c?: number) {
  // 이 부분은 에러가 발생하지 않는다.
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// func(){}

// func(); // 에러 발생
func(1); // 에러 없음
// func(1, 2); // 에러 발생
func(1, 2, 3); // 에러 없음

// 사용자 정의 타입 가드

type Dog = {
  bow: "왈! 왈!";
};

type Cat = {
  bow: "미야오옹~";
};

type Animal = Dog | Cat;

// 사용자 정의 타입 가드는 boolean을 반환
const isDog = (animal: Animal): animal is Dog => {
  return animal.bow === "왈! 왈!";
};
