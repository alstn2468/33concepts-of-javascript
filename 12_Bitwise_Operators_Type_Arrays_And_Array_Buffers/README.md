# 비트 연산자, 형식화 배열, 버퍼(배열)

## 비트 연산자

자바스크립트는 아래의 7가지의 **비트 연산자**를 지원한다.<br/>

| 연산자 |         이름          |                               섦명                               |
| :----: | :-------------------: | :--------------------------------------------------------------: |
|   &    |          AND          |           양쪽의 비트가 모두 1인 비트만 1로 설정한다.            |
|   \|   |          OR           |          양쪽 비트 중 하나가 1이면 비트를 1로 설정한다.          |
|   ^    |          XOR          |        양쪽 비트 중 하나만 1일 경우 비트를 1로 설정한다.         |
|   ~    |          NOT          |                     모든 비트를 반전시킨다.                      |
|   <<   | Zero fill left shift  |  오른쪽에 0을 넣어 왼쪽으로 이동하고 가장 왼쪽 비트를 버립니다.  |
|   >>   |  Signed right shift   |    가장 왼쪽 비트를 왼쪽에 넣고 가장 오른쪽 비트를 버립니다.     |
|  >>>   | Zero fill right shift | 왼쪽에 0을 넣어 오른쪽으로 이동하고 가장 오른쪽 비트를 버립니다. |

자바스크립트에서 10진수를 2진수 문자열로 변환하기 위해서는 `toString(2)`와 같이 사용한다.<br/>

```javascript
(5).toString(2); // 101
(2).toString(2); // 10
(1000).toString(2); // 1111101000
```

2진수 문자열을 10진수 숫자로 변환하기 위해서는 `parseInte("2진수 문자열", 2)`와 같이 사용한다.<br/>

```javascript
parseInt("101", 2); // 5
parseInt("10", 2); // 2
parseInt("1111101000", 2); // 1000
```

### 비트연산자 사용 예시

#### & 연산자

```javascript
const a = 5;
const b = 2;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): 101
console.log(`b.toString(2): ${b.toString(2)}`);
// b.toString(2): 01
console.log(`a & b: ${a & b}`);
// a & b: 0
```

`&` 연산자는 양쪽의 비트가 모두 1인 비트만 1로 설정한다.<br/>

#### | 연산자

```javascript
const a = 5;
const b = 2;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): 101
console.log(`b.toString(2): ${b.toString(2)}`);
// b.toString(2): 01
console.log(`a | b: ${a | b}`);
// a | b: 7
```

`|` 연산자는 양쪽 비트 중 하나가 1이면 비트를 1로 설정한다.<br/>

#### ^ 연산자

```javascript
const a = 5;
const b = 2;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): 101
console.log(`b.toString(2): ${b.toString(2)}`);
// b.toString(2): 01
console.log(`a ^ b: ${a ^ b}`);
// a ^ b: 7
```

`^` 연산자는 양쪽 비트 중 하나만 1일 경우 비트를 1로 설정한다.<br/>

#### ~ 연산자

```javascript
const a = 5;
const b = 2;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): 101
console.log(`~a: ${~a}`);
// ~a: -6
console.log(`(~a).toString(2): ${(~a).toString(2)}`);
// (~a).toString(2): -110

console.log(`b.toString(2): ${b.toString(2)}`);
// b.toString(2): 01
console.log(`~b: ${~b}`);
// ~b: -3
console.log(`(~b).toString(2): ${(~b).toString(2)}`);
// (~b).toString(2): -11
```

`~` 연산자는 모든 비트를 반전시킨다.<br/>
자바스크립트는 **가장 왼쪽 비트를 빼기 부호**로 사용하는 **32비트 부호있는 정수**를 사용한다.<br/>
따라서 숫자 5의 2진수인 `101`에 `~`연산자를 사용하면 2가 아닌 -6을 반환한다.<br/>

#### << 연산자

```javascript
const a = 5;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): 101
console.log(`a << 1: ${a << 1}`);
// a << 1: 10
console.log(`(a << 1).toString(2): ${(a << 1).toString(2)}`);
// (a << 1).toString(2): 1010
console.log(`a << 2: ${a << 2}`);
// a << 2: 20
console.log(`(a << 2).toString(2): ${(a << 2).toString(2)}`);
// (a << 2).toString(2): 10100
```

`<<` 연산자는 오른쪽에 0을 넣어 왼쪽으로 이동하고 가장 왼쪽 비트를 버립니다.<br/>

#### >> 연산자

```javascript
const a = -5;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): -101
console.log(`a >> 1: ${a >> 1}`);
// a >> 1: 3
console.log(`(a >> 1).toString(2): ${(a >> 1).toString(2)}`);
// (a >> 1).toString(2): -11
console.log(`a >> 2: ${a >> 2}`);
// a >> 2: -2
console.log(`(a >> 2).toString(2): ${(a >> 2).toString(2)}`);
// (a >> 2).toString(2): -10
```

`>>` 연산자는 가장 왼쪽 비트를 왼쪽에 넣고 가장 오른쪽 비트를 버립니다.<br/>

#### >>> 연산자

```javascript
const a = -5;

console.log(`a.toString(2): ${a.toString(2)}`);
// a.toString(2): -101
console.log(`a >>> 1: ${a >>> 1}`);
// a >>> 1: 2
console.log(`(a >>> 1).toString(2): ${(a >>> 1).toString(2)}`);
// (a >>> 1).toString(2): 10
console.log(`a >>> 2: ${a >>> 2}`);
// a >>> 2: 1
console.log(`(a >>> 2).toString(2): ${(a >>> 2).toString(2)}`);
// (a >>> 2).toString(2): 1
```

`>>` 연산자는 왼쪽에 0을 넣어 오른쪽으로 이동하고 가장 오른쪽 비트를 버립니다.<br/>

## 비트 연산자 활용하기

## 형식화 배열

## 버퍼(배열)
