## Function Parameter Annotaion

타입스크립트에서는 함수를 정의할 때 함수의 파라미터의 타입도 지정할 수 있다.

```md
const myCat = (name: string) => {
return `Hey, ${name}! Why are you so CUTE❣️`
}
```

이렇게 파라미터의 타입을 지정해줄 경우 함수가 원하는 타입의 값만 전달받을 수 있게 할 수 있다.

e.g)

```md
myCat('Homie');
```

=> 함수 호출 가능

```md
myCat(3);
```

=> Typescript error

## More On Function Parameter Annotaion

파라미터 여러 개의 타입을 지정해줄 수도 있다.

```md
const myCat = (name: string, age: number, isLovely: boolean) => {}
```

이렇게 할 경우, `myCat("Cherie", 8)` 처럼 파라미터 갯수를 틀리거나 다른 타입의 값을 넘기는 실수를 했을 때 타입스크립트가 즉각적인 피드백을 해준다.

<br/>

## Working with Default Parameters

파라미터의 디폴트 값도 정해두고 싶고, 타입도 지정해주고 싶을 땐 어떻게 써야할까? 간단하다.

```md
function greet(person: string = "stranger") {
return `Hello, ${person}`!
}
```

타입 선언 뒤에 = 기호를 이용해 써주면 된다. 디폴트값을 정해줬기 때문에 greet()처럼 아무런 파라미터를 넘기지 않고 함수를 호출하는 것이 가능하다.

<br/>

## Return Type Annotaion

함수가 반환하는 값도 타입을 정해줄 수 있다.

```md
const addNums = (x:number, y: number): number => {
return x+y;
}

addNums(5,5);
```

그러나 실제로는 위처럼 반환 타입을 명시해줄 필요가 없을 때가 많다. 변수 때처럼 타입스크립트가 자동으로 추론하기 때문이다.

<br/>

## Anonymous Function Contextual Typing

forEach나 map처럼 함수 안에 함수를 넘길 때, 타입스크립트는 코드의 콘텍스트를 읽고 자동으로 파라미터의 타입을 추론한다.

```md
const colors= ["red", "orange", "yellow"];
colors.map(color=> {
return color.toUpperCase()
})
}
```

예를 들어 위의 코드에서 우리는 color의 타입을 설정하지 않았지만, 타입스크립트는 color를 any 타입이 아니라 string 타입으로 간주한다.

<br/>

## Void

Void는 아무 것도 반환하지 않는 함수를 위한 타입이다. 아무 것도 반환하지 않는 함수의 경우 타입스크립트가 자동으로 void 타입으로 추론해주기 때문에 꼭 Void 타입이라고 명시해줄 필요는 없으나 종종 직접 써줘야 하는 경우도 있긴 하다.

## Never

자바스크립트에는 없는 타입스크립트만의 고유한 타입이다. void와 헷갈리기 쉬운데 다르다. void는 기술적으로는 undefined로 나오니까 어떤 것을 반환하긴 하는 셈인데, never는 무언가를 반환할 기회조차 "never" 없다는 점이 다르다.
