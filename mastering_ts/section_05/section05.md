## Working With Object Types

object 형태의 타입을 정의하는 법은 간단하다. {} 괄호 안에 각 키마다 타입을 적어주면 된다. 이 방식은 변수의 타입을 선언할 때도, 함수의 파라미터의 타입을 선언할 때도, 함수의 반환 값의 타입을 선언할 때도 사용할 수 있다. <br/>
아래 예시를 보자.

```md
function printName(person: { first: string; last: string }) {
console.log(`${person.first} ${person.last}`);
}

printName({ first: "Perfume", last: "Lim" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
return { x: Math.random(), y: Math.random() };
}
```

<br/>

## Excess Properties

위에서 printName()이라는 함수를 선언했다. printName 함수의 파라미터의 타입도 정의했다. 이 함수의 파라미터는 각각 first와 last라는 키를 가지고 있다. 이처럼 미리 파라미터의 타입을 정의했기 떄문에

```md
printName({ first: "Mick", last: "Jagger", age: 73 });
```

같은 코드는 타입 에러가 난다. age라는 타입은 없기 때문이다. 그런데 아래와 같은 코드는 에러가 발생하지 않는다.

```md
const singer = { first: "Mick", last: "Jagger", age: 73, isAlive: true };
printName(singer);
```

이처럼 별도의 변수로 먼저 선언하면, 타입스크립트가 필요한 요소를 모두 갖추었는지만 체크하기 때문이다. 즉 first와 last를 가지고 있는지만 확인하고 다른 프로퍼티들은 무시된다.

<br/>

## Type Alias

같은 구조의 타입을 여러 번 반복해서 적고 싶지 않을 때 Type 키워드를 쓰면 편리하다. Type 키워드를 이용해 나만의 타입을 정의하고 가져다가 재사용하면 된다.

e.g)

```md
type Point = {
x: number;
y:number;
};

let coordinate: Point = {x: 34, y: 2};
```

<br/>

## readonly

자바스크립트에는 없는 타입스크립트만의 속성 중 하나인 readonly는 이름처럼 값을 참조하고 읽을 수는 있으나 변경할 수는 없게 하는 제한을 만든다.(modifier)

<br/>

## Intersection Types

```md
type Circle = {
radius: number;
};

type Colorful = {
color: string;
};
```

위와 같은 두 타입이 있고, radius와 color 타입을 둘다 쓰고 싶을 땐 Intersection Types를 이용하면 편리하다. "&" 기호를 이용해 두 타입을 합칠 수 있다.

```md
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
radius: 4,
color: "yellow",
};
```

두 타입을 합친 것에 새로운 타입을 더할 수도 있다. 새로운 타입을 더할 때는 {}를 이용한다. 다만 이 방법은 (개인적으로) 코드가 그렇게 아름답지 않은데, 직관적이라는 장점이 있다.

e.g)

```md
type Cat = {
numLives: number;
};

type Dog = {
breed: string;
};

type CatDog = Cat &
Dog & {
age: number;
};
```
