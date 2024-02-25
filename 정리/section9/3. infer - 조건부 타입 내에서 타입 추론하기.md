<!-- @format -->

# infer(inference-추론)

## 개념

- 타입스크립트에서 조건부 타입을 표현하는 데 사용되는 키워드
- 조건부 타입 내에서 특정 타입만 추론하는 기능
- Ifer는 if 구문과 유사하지만, if 구문은 조건이 참일 때만 값을 반환하는 반면, ifer 구문은 조건이 참일 때와 거짓일 때 모두 값을 반환합니다.

## 사용 예시

```ts
type FuncA = () => string;
type FuncB = () => number;

// 여기서 ifer은 참이 되게하는 값으로 추론해버린다
type ReturnType<T> = T extends ()=> ifer R ? R : never
// FuncA 일때는 R = string
// FuncB 일때는 R = number

type A = ReturnType<FuncA>
type B = ReturnType<FuncB>
type C = ReturnType<number> // 이땐 never로 추론한다...
// 왜냐하면 number 타입은 함수가 아니기 때문.
// ifer 다음 추론할 수 없는 값이 온다면 false


```

## 쉬운 예제

```ts
// 1. T는 promise 타입 이어야 한다.
// 2. promise 타입의 결과값 타입을 반환해야한다.

type PromiseUnpack<T> = T extends Promise<ifer R> ? R : never
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
```
