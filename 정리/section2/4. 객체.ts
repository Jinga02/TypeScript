// // object
// let user: object = {
//   id: 1,
//   name: "진재환",
// };
// // object로 타입을 정하면 user.id 이렇게 접근불가

// // 그럼 어떻게? => 객체 리터럴
// // 구조를 기준으로 정의한다 해서 => 구조적 타입 시스템이라 부른다.
// // 프로퍼티 기준으로 타입을 정한다 => Property Base System
// let user1: {
//   id: number;
//   name: string;
// } = {
//   id: 2,
//   name: "최지은",
// };

// // 위 처럼 선언 시 user.id 가능

// let cat: {
//   name: string;
//   color?: string;
// } = {
//   name: "수잔 추",
//   // 위 color뒤에 ?덕분에 값이 있어도 없어도 됨
//   // 선택적 프로퍼티, Optional Property
//   // color: "gray",
// };

// // 읽기 전용으로 선언
// let config: {
//   readonly apiKey: string;
// } = {
//   apiKey: "MY API KEY",
// };

// // config.apiKey ="hacked" // 읽기 전용으로 선언했기때문에 수정 불가능
