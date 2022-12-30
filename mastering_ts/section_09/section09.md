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
