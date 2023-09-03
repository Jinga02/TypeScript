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

// never
// never -> 존재하지 않는
// 불가능한 타입

// 아무것도 반환하지 않는 무한루프
// 절대 반환할 수 없어서 이 함수에 반환값이 있다는거 자체가 모순이다!! 할 때
function func4() {
  while (true) {}
}
