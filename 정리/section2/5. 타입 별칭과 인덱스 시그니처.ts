// // 타입 별칭
// // 아래와 같이 선언하면 코드가 너무 길고 복잡하다. 이러한 문제를 해결하기 위해 타입 별칭을 사용

// let user: {
//   id: number;
//   name: string;

//   nickname: string;
//   brith: string;
//   bio: string;
//   location: string;
// } = {
//   id: 1,
//   name: "진재환",
//   nickname: "jinga",
//   brith: "1997.01.17",
//   bio: "안녕하세요",
//   location: "대구",
// };

// // 아래와 같이 User라는 별칭으로 타입을 만들어주면 된다.
// type User = {
//   id: number;
//   name: string;
//   nickname: string;
//   brith: string;
//   bio: string;
//   location: string;
// };

// let user2: User = {
//   id: 1,
//   name: "진재환",
//   nickname: "jinga",
//   brith: "1997.01.17",
//   bio: "안녕하세요",
//   location: "대구",
// };
// let user3: User = {
//   id: 1,
//   name: "진재환",
//   nickname: "jinga",
//   brith: "1997.01.17",
//   bio: "안녕하세요",
//   location: "대구",
// };

// // 인덱스 시그니처
// // key가 string value가 string일때 key와 value를 기준으로 규칙을 정의
// // CountryCodes는 객체 타입이며, 이 객체는 문자열 키(key)와 문자열 값(string)의 쌍을 가집니다.
// // [key: string]: 객체의 키가 문자열이고, 이 문자열은 어떤 문자열이든 될 수 있습니다.
// // : string;: 해당 키에 대한 값은 문자열(string)이어야 합니다

// // 예시1
// type CountryCodes = {
//   [key: string]: string;
// };

// let countryCodes: CountryCodes = {
//   Korea: "ko",
//   USA: "us",
//   Japan: "ja",
// };

// // 예시2
// // 주의할점
// // 인덱스 시그니처는 아래의 [key: string]: number;를 위반 하지만 않으면 모두 허용
// // 그렇기 때문에 아래처럼 빈 객체로 만들어도 에러가 안뜸
// type CountryNumberCodes = {
//   [key: string]: number;
//   // Korea라는 number를 반드시 가지도록 정의
//   // Korea: number;

//   // 예외로 USA는 string로 선언하려면?
//   // USA:
// };
// // let countryNumberCodes: CountryNumberCodes = {};
// let countryNumberCodes: CountryNumberCodes = {
//   Korea: 410,
//   USA: 840,
//   Japan: 826,
// };
