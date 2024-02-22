// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 아래처럼 객체 생성시 헷갈릴 수 있음
// enum 사용해서 해결!
// 자동으로 ADMIN = 0 USER = 1 ... 이렇게 선언됨
// 10부터 시작하고 싶으면? => ADMIN:10 하면 끝!
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "진재환",
  // 아래 2개는 컴파일되면 .js에선 사라지는데 어떻게 쓰지?
  // enum을 예외~
  role: Role.ADMIN, // 0은 관리자
  language: Language.korean, // 헷갈리지 않고 개꿀?~
};
const user2 = {
  name: "진재환",
  role: Role.USER, // 1은 일반 유저
};
const user3 = {
  name: "진재환",
  role: Role.GUEST, // 2은 게스트
};

console.log(user1, user2, user3);
