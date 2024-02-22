// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// 반환하지 않고 출력
// 아무런 값도 반환하지 않음.
function func2(): void {
  console.log("hello");
}
// undefined으로 선언하면 undefined을 반환해야함
function func3(): undefined {
  console.log("hello");
  return;
}
// void로 선언하면 undefined말고는 할당 불가능
let a: void;
// a = 1;
// a = "ndnd";
// a = undefined;

// 그럼 왜 null이나 undefined를 return 하지 않고 void로 타입을 선언하느냐?
function func4(): void {
  console.log("hello");
}
// 위 함수처럼 ㄹㅇ return자체를 안적고 반환값이 없는 함수를 구현하기 위해!!

// never
// never -> 존재하지 않는
// 불가능한 타입

// 아무것도 반환하지 않는 무한루프
// 절대 반환할 수 없어서 이 함수에 반환값이 있다는거 자체가 모순이다!! 할 때
function func5() {
  while (true) {}
}
