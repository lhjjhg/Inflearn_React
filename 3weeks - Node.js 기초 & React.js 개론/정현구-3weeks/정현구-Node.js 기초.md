# **[JavaScript]** 3주차 Npde.js 기초 (정현구)

## 1 .Node.js란?
웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 런타임, 즉 자바스크립트의 실행 환경(Run time) = 구동기 
> React 뿐만 아니라 Vue.js나 Svelte까지 node를 기반으로 동작 

### Node.js를 만든 이유 

> 그 전에 JavaScript는 누가 동작 시킬까?
> - Javascript 해석은 브라우저가 담당 
> - 각각 브라우저들은 JavaScript를 해석할 수 있는 엔진(해석 엔진)을 가지고 있는데, 그 중 crome의 해석 엔진 v8이 있다.
> - 바로 이 v8를 따로 출시한 것이 Node.js

Node.js를 만든 이유는 Javascript라는 언어를 브라우저 내 말고도 **다른 환경**에서 실행할 수 있게 도와주기 위함이다.
- 그래서 브라우저를 키지 않아도 Node.js만 있으면 자바스크립트 문법이 실행된다.


## 2. Node.js 설치하기 
### [Node.js 설치 바로가기](https://nodejs.org/ko/download)
lTS 버전 다운로드 
### 설치 확인
- `cmd`에서 `node -v`, `npm -v`를 통해 버전 출력 

## 3. Node.js 사용하기 

#### 프로젝트 
- 특정 목적을 갖는 프로그램 단위 

ex) 쇼핑몰 프로젝트, 웹 포털 프로젝트 

### 패키지 
node.js에서 사용하는 프로그램 단위 
- 앞으로 사용할 모든 라이브러리들도 Pacjage라는 단위로 만들어 짐

> package.json내 scripts 수정해보기 
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js" // 바로 실행되는 코드 추가 
  },
```

## 4. Node.js 모듈 시스템 이해하기 

### 모듈이란?
- 기능별로 나뉘어진 각각의 자바스크립트 파일들 

ex) user.js, cart.js, payment.js

### 모듈 시스템
- 모듈을 생성하고,불러오고,사용하는 등의 모듈을 다루는 기능을 제공하는 시스템
- javascript의 모듈 시스템
    - `Common JS(CJS)`
    - `ES Module(ESM)`
    - AMD
    - UMD

### Common JS(CJS) 사용 방법 
- math.js
```javascript
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
module.exports = {
    add,
    sub,
}
```
- index.js
```javascript
const moduleData = require("./math"); // 또는 
const { add, sub } = require("./math"); // 객체 구조 분해 할당 

console.log(add(1, 2));
console.log(sub(1, 2));
```

### ES 모듈 사용법 
- package.json 내에 "type": "module" 추가 (ESM을 사용 CJS와 같은 경우 불가능해짐)
- math.js
```javascript
export { add, sub }; 
// 앞에 export 키워드를 붙여 ES 모듈 시스템 활용 가능
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
// ES 모듈 중 하나의 모듈을 대표하는 디폴트 값 내보내기 
export default function multiply(a, b) {
    return a * b;
}
```
- index.js
```javascript
import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
```
- 확장자까지 확실하게 입력해줘야 함.
- default는 중괄호 없이 사용하고, 이름도 변경할 수 있다.

## Node.js 라이브러리 사용하기 

### 라이브러리란?
- 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것

ex) 날짜, 수학, 그래픽 라이브러리 (day.js)

> 구글에 [npmjs](https://www.npmjs.com) 사이트 들어가기 

> Search하여 필요한 라이브러리 알아보기 

#### 설치하면 생기는 변화 
- package.json 내부
```json
 "dependencies": {
    "randomcolor": "^0.6.2"
  }
```
> dependencies(의존)으로 버전 정보를 확인함 
- node_modules -> 설치한 라이브러리가 실제로 저장되는 곳 
- package-lock.json은 기존의 package.json 보다 더 정확하고 엄밀하게 저장되는 파일 
  - package.json 내부의 `^0.6.2`의 `^`은 대략적인 버전 표기 

사용 예시 
```javascript
import randomColor from "randomcolor"; 

const color = randomColor();
console.log(color);
```
- 라이브러리는 경로가 아닌 이름만 명시
- 마지막으로 node_modules 폴더가 사라져도 package.json안에 정보만 있어도 `npm install` 또는 `npm i`만 해줘도 다시 설치 가능 

  - **유용한 점**: 깃허브 업로드 할때 굳이 node_modules 폴더는 포함하지 않고 package.json만 있으면 필요한 라이브러리 다시 설치 가능