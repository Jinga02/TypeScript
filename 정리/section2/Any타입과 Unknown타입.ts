// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar = 10; // 선언하지 않아도 자동으로 number로 추론
// anyVar = 'hello' // 그래서 에러뜸

// 지금은 10이지만 나중에 문자열도 써야한다면?
let anyData: any = 10;
anyData = "hello";

// 하지만 any가 TypeScript를 사용하는 이유를 없앤다.. 되도록이면 안쓰는게...

// unknown
let unknown: unknown;

// any처럼 아무 타입으로 할당 가능
unknown = "";
unknown = 1;
unknown = () => {};

// 하지만 any와는 다르게 다른 타입에 사용하는건 불가능
