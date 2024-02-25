<!-- @format -->

# keyof 연산자

## 개념

- 특정 타입의 모든 속성 이름들의 타입을 조회하는 연산자
- 객체의 속성 이름들을 타입으로 사용할 수 있다.

## 사용 예시

```ts
interface Person {
  name: string;
  id: number;
}

const person: Person = {
  name: "진재환",
  age: 27,
};

function getPropertyKey(person: Person, key: string) {
  return person[key];
}

getPropertyKey(person, "name");

// 위 처럼 작성시 getPropertyKey의 2번째 매개변수인 key에서 에러가 발생
// name은 string이지만 age는 number이기때문에

// 그래서 이렇게 유니온 타입으로 해줘야한다.
function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}
// 하지만 매개변수나 타입이 수십 수백개라면?

// 이렇게 타입을 keyof 타입 으로 해주면 타입의 모든 키를 유니온타입으로 가져와서 타입정의를 해준다
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// keyof 타입으로 하면 타입내의 property가 추가되도 문제 없다~

// 주의할 점은 type만 가능 interface 불가능
```

## typeof와 함께

```ts
// 이렇게 typeof 변수로 선언 시 해당 변수의 property의 타입으로 선언
type Person = typeof person;

// 이렇게도 가능
function getPropertyKey(person: Person, key: keyof typeof person) {}

const person = {
  name: "진재환",
  age: number,
};
```
