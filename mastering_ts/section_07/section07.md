## Union Types

유니온 타입이란 자바스크립트의 OR 연산자와 비슷합니다. A타입이거나 B타입이라는 뜻입니다.

```md
function printAge(age: number | string) {
console.log(`You are ${age} years old`);
}
```

위 함수에서 age에는 number 타입이나 string 타입이 모두 올 수 있습니다. <br/>

그러나 확실한 타입을 보장하지 않기 때문에, 아래와 같은 경우 에러가 발생합니다.

```md
function calculateTax(price: number | string, tax: number) {
price.replace("$", "")
}
```

replace 메소드는 string 타입의 값에만 적용할 수 있는데, price는 유니온 타입이라 number 타입일 수도 있기 때문입니다. 이럴 경우 if 등을 이용해 조건문으로 해결할 수 있습니다.

```md
function calculateTax(price: number | string, tax: number) {
if (typeof price === "string") {
price.replace("$", "");
}
}
```

이처럼 유니온 타입을 사용할 때는 타입 좁히기(Narrowing the type)가 중요합니다.

## Union Types & Arrays

`const stuff: (number | string)[]` 와 `const stuff: number | string[]`는 다릅니다. 전자는 '숫자 혹은 문자열로 된 값'들의 배열이지만, 후자는 '숫자' 또는 '문자열의 배열'이기 때문입니다. <br/>

`const stuff: (number | string)[]`와 `const stuff: number[] | string[]` 역시 다릅니다. 후자는 `[2, "hello"]` 같은 값을 받을 수 없습니다. 숫자의 배열이거나(e.g `[1,2,3]`) 문자열의 배열인 값이라는 뜻이기 때문입니다.

## Literal Types

literal type은 단순한 타입이 아니라 그 자체로 값도 가지고 있습니다. literal 타입만으로는 그다지 유용하지 않지만, 유니온 타입이나 튜플 타입과 결합하면 강력한 도구가 됩니다.

```md
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
return `The answer is ${answer}`;
};
```

위의 예시에서는 유니온 타입과 결합했고, giveAnswer라는 함수는 yes, no, maybe 이 세 가지를 제외한 다른 파라미터를 받을 수 없게 제한해주었습니다.
