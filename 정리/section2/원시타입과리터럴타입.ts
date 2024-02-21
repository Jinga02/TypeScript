// 원시타입과 리터럴
// 타입 주석, Type Annotation

// number
// number타입에만 적용 가능한 메서드만 사용가능
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
// string타입에만 적용 가능한 메서드만 사용가능
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 하지만 프로젝트를 진행하다 변수에 null값을 일단 넣어줘야 할때
//  tsconfig.json에 "strictNullChecks": false // null 타입이 아닌 변수에 null할당 허용
// let num123 : number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
let staA: "hello" = "hello";
let boolA: true = true;
// numA = 12; 리터럴 값으로 정해진 값만 사용 가능
