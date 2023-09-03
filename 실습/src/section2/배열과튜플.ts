// 배열

// 요소들의 타입 정해주고 []으로 배열임을 선언
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "Im", "JaeHwan"];

// 제네릭 문법
let bollArr: Array<boolean> = [true, true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let mixArr: (string | number)[] = ["Hello", "Im", "JaeHwan", 1];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 튜플은 언제 사용하는가?

const users: [string, number][] = [
  ["진재환", 1],
  ["최지은", 2],
  ["수잔추", 3],
  // 위 3개 배열처럼 규칙을 잘 지키고있는데
  // [4, "수잔이!"],
  // 위 요소처럼 규칙을 지키지 않을 때 엄격히 검사할 때 유용
];
