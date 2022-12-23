## Our First Type Annotaion

Type Annotaion의 기본은 다음과 같다.

```md
let myVar: type = value;
```

변수의 값이 어떤 타입을 가지고 있는지 : 뒤에 표현해주면 된다. 예시를 들어보자면

```md
let myString: string = 'Words!';
```

위와 같이 선언하면 더이상 `myString = 100` 같은 string 타입이 아닌 값을 할당할 수 없다. 하지만 `myString = "New words 🎶";` 처럼 같은 string 타입이라면 재할당을 할 수 있다.

<br/>

## Compiling TypeScript

- tss 메소드를 이용해 ts 파일을 js로 컴파일 할 수 있다.
- 타입을 작성하면 무언가 잘못된 값을 할당했을 때 타입스크립트로부터 즉각적인 피드백을 받을 수 있다. 또한 그 오류를 고치지 않은 상태로 컴파일을 하면, 그때도 타입스크립트로부터 한번 더 안내를 받는다. 컴파일이 완료되면 타입스크립트의 문법이 제거된 순수한 자바스크립트 코드를 얻는다.

<br/>

## Type Inference

```md
let x = 27;
x = 'Twenty-seven';
/_ ERROR - Type 'string' is not assignable to type 'number' _/
```

TypeScript는 제법 똑똑해서, 우리가 굳이 타입을 지정해주지 않더라도 대부분의 경우 위의 코드처럼 타입을 스스로 추론한다.(Type Inference)

<br/>

## Any type

Any는 타입스크립트로부터 탈출하는 마법주문 같은 타입이다. 타입을 any로 선언할 경우 타입체크를 건너뛰기 때문에 많이 사용할 경우 typescript를 사용하는 의미가 없어진다.

<br/>

## Delayed initialization & Implicit Any

```md
let a;
```

처럼 let 키워드를 쓸 때 선언과 초기화를 동시에 하지 않고 나중에 하는 경우가 있다. 이럴 경우 타입스크립트는 해당 변수를 any 타입으로 간주한다. 그래서 이럴 때는

```md
let a:string;
```

처럼 타입추론에 의지하지 않고, 직접 타입을 지정해줘야 한다.
