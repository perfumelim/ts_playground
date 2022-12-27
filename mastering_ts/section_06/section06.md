## Array Types

어떤 타입의 값들로 채워진 배열인지 타입스크립트에게 알려주는 두 가지 방법이 있다.

```md
const ageList: number[] = [1, 2, 3];
ageList[0] = 99;
```

첫번째 방법은 []괄호 앞에 타입을 적어주는 것이다. number[]처럼. 두 번째도 사실 거의 비슷하다.

```md
const bools: Array<boolean> = [];
```

둘다 잘 쓰인다.

우리가 만든 커스텀 타입의 배열도 만들 수 있다.

```md
type Point = {
x: number;
y: number;
};

const coords: Point[] = [];
```

## Multidimentional Arrays

그럼 만약 `[["x","o","x"],["o","x","o],["x","o","o"]]`처럼 배열이 이중으로 되어 있을 땐 어떻게 표기할까? `string[[]]` ? 아니다. 괄호를 두 번 쓰면 된다.

string[][]처럼. 삼중 배열이면 string [][][]처럼 세 번 쓰면 된다.
