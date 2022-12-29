## Tuples

Tuple은 자바스크립트에는 없는 타입스크립트만의 고유한 타입입니다. 튜플은 길이와 순서가 정해진 엄격한 배열을 말합니다.

```md
let myTuple: [number, string];
```

저렇게 튜플 타입으로 지정할 경우, `myTuple = ['Hello', 10]` 같은 코드를 작성하면 타입 에러가 발생합니다. 0번 인덱스가 number, 1번 인덱스가 string이라는 순서를 지키지 않았기 때문입니다.
<br/>

그러나 튜플 타입을 사용할 때 주의해야할 점이 있습니다. 초기할당할 때는 순서와 길이를 엄격하게 따지지만, push()나 pop() 메소드를 사용할 때는 순서와 길이를 상관하지 않고 동작합니다.

```md
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

goodRes.push(123);
```

위의 코드에서 goodRes 배열에 새로운 값을 추가하는 순간, 우리가 튜플로 선언했던 타입의 길이가 달라지지만 push는 문제없이 동작합니다. pop()역시 마찬가지입니다.<br/>
또한 튜플의 배열도 타입으로 정할 수 있습니다.

```md
const responses: HTTPResponse[] = [
[404, "Not Found"],
[200, "OK"],
];
```

## Enums

Enum은 상수(constant)들의 묶음입니다. 에러코드나 동서남북처럼 어떤 세트인 값들을 사용할 때 편리하기 때문에 이용합니다. enum을 사용하면 자동완성이 되서 편리하기도 합니다.

```md
enum OrderStatus {
PENDING,
SHIPPED,
DELIVERED,
RETURNED,
}
```

위의 코드를 자바스크립트로 컴파일하면 다음과 같은 코드가 됩니다.

```md
var OrderStatus;
(function (OrderStatus) {
OrderStatus[(OrderStatus["PENDING"] = 0)] = "PENDING";
OrderStatus[(OrderStatus["SHIPPED"] = 1)] = "SHIPPED";
OrderStatus[(OrderStatus["DELIVERED"] = 2)] = "DELIVERED";
OrderStatus[(OrderStatus["RETURNED"] = 3)] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
```
