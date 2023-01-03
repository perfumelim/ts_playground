## Interfaces

interface는 type 키워드와 비슷합니다. 다만 object 형태의 타입만을 위해 쓸 수 있고, = 를 쓸 필요가 없다는 점이 다릅니다.

```md
interface Product {
name: string;
price: number;
applyDiscount(discount: number): number;
}
```

처럼 쓸 수 있습니다. 인터페이스 안에 메소드의 타입을 정의할 수도 있습니다. 메소드는

```md
interface Addable {
add(x: number, y: number): number;
}
```

혹은

```md
interface Addable {
add: (x: number, y: number) => number;
}
```

처럼 두 가지의 방식으로 정의할 수 있습니다. 하지만 아래 예시처럼 {}를 사용하는 방식은 틀립니다.

```md
interface Addable {
add(x: number, y: number) {
number
}
}
```

## Types vs. Interfaces

```md
type Person = {
name: string;
};

type Person = {
age: number;
};
```

라는 코드를 쓰면 어떻게 될까요? 에러가 납니다.

```md
const person: Person = {
name: "Jerry",
age: 42,
};
```

위 코드 역시 Person 타입이 age를 갖고 있지 않다고 에러를 뱉어냅니다. 하지만 Interface로 선언할 땐 다른 결과가 나타납니다.

```md
interface Person {
name: string;
}

interface Person {
age: number;
}
```

위 코드는 아무런 에러 없이 작동합니다. 뿐만 아니라 Person이란 타입이 name과 age를 모두 갖게 됩니다. 그래서 아래 코드 역시 아무런 에러가 일어나지 않습니다.

```md
const person: Person = {
name: "Jerry",
age: 42,
};
```
