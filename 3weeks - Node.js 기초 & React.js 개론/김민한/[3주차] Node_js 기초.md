# Node.js 기초
JS는 원래 웹페이지 내부에서 일어나는 기능들을 구현하기 위해 만들어진 스크립트 언어
- 문법이 유연함
- 생산성이 높음

이런 매력적인걸 웹 브라우저 바깥에서도 사용할 수 있는 런타임인 **Node.js**를 사용하여 개발할 수 있게 됨
![](https://velog.velcdn.com/images/minari0v0/post/295c0bbd-313a-423b-99a0-172d1235fbee/image.png)

>근데..React인데 왜 갑자기 Node.js?

React, Next.js, Vue.js의  
최종 실행은 **브라우저 담당**.

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="45" />
</p>


하지만 실제 개발을 시작하면  
`npm install`, `npm run dev`, `npm run build` 같은 명령어를 계속 사용함

이 명령어들이 실행되는 환경이 바로 **Node.js**다.

Node.js는  
**번들링, 개발 서버, 빌드, 패키지 관리 담당**.

즉,  
Node.js = 실행 ❌  
Node.js = **프론트엔드 개발 환경** ✅

---

## Node.js 설치하기
[Node.js® 다운로드](https://nodejs.org/ko/download) *공식 링크를 걸어두었습니다.*

1. (윈도우) 링크에서 `Windows 설치 프로그램 (.msi)`으로 있는 윈도우용 설치 파일 다운
	(맥/리눅스) 링크에서 드롭다운으로 (.pkg/.xz) 파일을 다운
2. 동의 &rarr; 중간에 Tools for Native Modules에서는 체크를 하는 것을 권장
		- C / C++로 만들어진 모듈을 컴파일해서 쓰는 것들을 존재하는데 그것을 돕는 걸 설치하는 것
3. 설치 후 윈도우에서는 `powershell` or `cmd`를 통해 `node -v`와 같은 노드 버전 확인하는 명령어를 작성해보면, 설치된 버전이 출력됨

### Npm 설치 확인
- Npm은 프로젝트 관리할 때나 외부 라이브러리를 설치할 때 매우 많이 사용됨
- Node.js 설치할 때 같이 설치되지만 그래도 잘 되었는지 확인할 필요는 있음
- `npm -v`을 통해 버전 출력을 볼 수 있음

---

## Node.js 사용하기
### 패키지
- Node.js에서 사용하는 프로그램의 단위


이제 간단한 사용을 해보기
1. 새로운 프로젝트 폴더를 생성 (예.section03)
2. 해당 폴더를 vscode나 다른 IDE에서 작업 영역으로 설정
3. vscode라면 ``CTRL+` ``  단축키를 통해 해당 작업 폴더의 터미널을 열 수 있음
4. `npm init` 명령어를 사용하여 초기 설정
5. 루트 폴더에서 `src`라는 폴더를 생성 후 그곳에서 index.js를 생성
6. src를 생성했기에, package.json에서 아래와 같이 시작을 명시해보기
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"
  }
```

7. 그 다음 `npm run start`를 사용하면 바로 실행됨

---

### 모듈
![](https://velog.velcdn.com/images/minari0v0/post/2fd4b3fe-a5c2-4b64-b3df-7f643272998a/image.png)

- 기능별로 나뉘어진 각각의 자바스크립트 파일들 &rarr; 모듈

<br>

### 모듈 시스템
![](https://velog.velcdn.com/images/minari0v0/post/0fdfa821-0bbe-41d1-9b54-0aecfd45ed22/image.png)

- 모듈을 생성, 불러오기, 사용 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
- 대표적으로 Common JS, ES Module이 많이 사용됨

--- 
### CommonJS
아래와 같은 `math.js`를 작성 후,
```js
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    add,
    sub,
};
```

그걸 사용할 `index.js`에서는
```js
const { add, sub } = require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
```

이렇게 사용할 수 있다.

---

### ES Module
아까 init 할 때 생성된 package.json 속에서 `type`이라는 옵션에 `"module"`이라고 삽입해주면, 앞으로 ESM 을 사용하겠다라고 표시하는 것임
- ESM은 리액트에서도 사용되는 모듈 시스템

```js
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// ESM의 값을 내보낼 땐
export { add, sub };

```
아까 작성한 `math.js`에서 export에서 리터럴로 작성하기만 하면 됨

물론 `index.js`에서도 약간 바꿔줘야함
```js
import { add, sub } from "./math.js"

console.log(add(1, 2));
console.log(sub(1, 2));
```

드디어 보기 편한 import 형식으로 작성할 수 있음

이제 이 export도 default값을 만들 수 있고, 함수 앞에 export를 적어서 명시해도 된다.
**math.js**
```js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}
```

**index.js**
```js
import mul, { add, sub } from "./math.js"

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
```

---
## 라이브러리
- 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은 것


[npmjs - 라이브러리 탐색 페이지](https://www.npmjs.com/)
npmjs는 vsc의 확장툴을 탐색해보는 곳처럼 등록된 라이브러리를 탐색할 수 있음

예시로 `randomcolor`라는 라이브러리를 설치하기 위해,
`npm i randomcolor` 명령어를 실행

&rarr; `package.json`의 dependencies 타입에 설치된 라이브러리가 뜨게 된다. 이제 이 프로젝트는 해당 라이브러리를 사용하고, 무슨 버전을 사용하는지 알리는 것. python의 requirements라 생각해도 좋을 듯 하다.

생성된 `/node_modules` 폴더는?
- 설치된 라이브러리의 저장소 같은 폴더

또다른 `package-lock.json`은?
- package.json에서는 대략적인 라이브러리 버전만 표기하지만, lock.json은 라이브러리들의 자세한 정보를 표기함


### 주의사항?
위에서 본 node_modules 폴더는 라이브러리를 설치한 폴더로 공유할 필요가 없음
- `npm install` 혹은 `npm i`를 통해서 다른 팀원 혹은 사용자는 라이브러리를 인스톨하면 됨

---

# React.js
![리액트](https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000)

- Meta(Facebook)이 개발한 오픈소스 JS 라이브러리
	| 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술
    
### React.js로 만들어진 서비스들

| <img src="https://cdn.simpleicons.org/netflix/E50914" width="40"/> | <img src="https://cdn.simpleicons.org/facebook/1877F2" width="40"/> | <img src="https://cdn.simpleicons.org/instagram/E4405F" width="40"/> | <img src="https://cdn.simpleicons.org/notion/000000" width="40"/> |
|:--:|:--:|:--:|:--:|
| [Netflix](https://www.netflix.com) | [Facebook](https://www.facebook.com) | [Instagram](https://www.instagram.com) | [Notion](https://www.notion.so) |

- 위 같은 대규모 서비스들을 지탱하고 있음
- 최근 좋은 프론트엔드 기술들이 계속 나오고 있지만, 가장 인기있는 건 아직 React
    
## React 기술적 특징
### 1. 컴포넌트를 기반으로 UI를 표현

**컴포넌트** - 우리말로 "구성요소"
화면을 구성하는 요소, UI를 구성하는 요소

![](https://velog.velcdn.com/images/minari0v0/post/69e6cc4f-eaa0-4afe-b841-185453a726f1/image.png)

컴포넌트 단위로 나눠서 모듈화할 수 있음

- 코드의 재사용(불필요한 코드 중복 x)
- 유지보수 용이

### 2. 화면 업데이트 구현 쉬움

**업데이트** : 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것

| 구분 | 선언형 프로그래밍 | 명령형 프로그래밍 |
|-------|------------------|------------------|
| 핵심 개념 | **무엇을(What)** 할 것인지 정의 | **어떻게(How)** 할 것인지 단계별로 정의 |
| 사고 방식 | 결과 중심 | 과정 중심 |
| 코드 초점 | 상태 → UI 매핑 | 실행 순서와 제어 흐름 |
| 개발자 역할 | 원하는 상태를 선언 | 모든 동작을 직접 지시 |
| 비유 | “토마토 파스타 하나 주세요.” | “주방 가서 면 꺼내고 9분 삶고, 팬에 소스 볶고…” |
| 예시 (JS) | `array.map()` | `for` 반복문 |
| 대표 기술 | <img src="https://cdn.simpleicons.org/react/61DAFB" width="28" /> | <img src="https://cdn.simpleicons.org/jquery/0769AD" width="28" /> |

<br>

---

![](https://velog.velcdn.com/images/minari0v0/post/8609ff79-4d99-4a46-956c-3a9ae577c17c/image.png)
각각의 컴포넌트에는 **State**로 상태를 저장하는 특수한 변수를 저장할 수 있음
- State 값이 바뀌면 각각 다른 UI를 화면에 렌더링하도록 설정 가능

### 3. 빠른 화면 업데이트

브라우저의 렌더링 과정(Critical Rendering Path)
![](https://velog.velcdn.com/images/minari0v0/post/1863de5b-7813-4654-a273-09235f4679a8/image.png)

- DOM: 요소들의 위치, 배치, 모양에 관한 모든 정보
- Render Tree: 웹페이지의 청사진
- CSSOM: 요소들의 스타일과 관련된 모든 정보
- Layout: 요소의 배치를 잡는 작업
- Painting: 실제로 화면에 그려내는 작업

이 때, DOM을 수정하면 렌더링 과정을 다시 진행하는데, Layout과 Painting 과정은 매우 오래 걸리는 작업으로 매우 비효율적임


![](https://velog.velcdn.com/images/minari0v0/post/f0884634-5f00-4657-b11b-90c6c399af9a/image.png)

React는 Virtual DOM이라는 가상 DOM이 있다. 동시에 3개의 업데이트가 발생했을 때, 실제 DOM 대신 Virtual DOM에 먼저 순서대로 반영을 함. 동시에 발생한 업데이트들이 다 모이면, 한 방에 실제 DOM에 반영함.

>React의 가상 DOM이 일종의 버퍼 역할을 해줌

최소한의 횟수로 돔의 수정이 되기에 좋은 업데이트 성능을 어느정도 보장함

---

## React App 생성하기

리액트는 아래 단계로 시작할 수 있는데

1. Node.js 패키지 생성
2. React 라이브러리 설치
3. 기타 도구 설치 및 설정

하지만 Vite를 사용하면 기본 설정이 적용된 App 생성이 가능함(물론 Vue나 다른 프론트 프레임워크도 가능)

Vite를 사용한 React App을 생성해보자.
`npm create vite@latest`으로 실행 후, 우리는 아직 TS로 안할거기에 JS 언어 리액트로 가면 된다.

프로젝트 네임을 설정하면 마지막 쯤 npm을 사용하여 설치할 것인지 묻는다.
No로 해도 나중에 `npm install`을 거치면 다 깔리니 괜찮다.

![](https://velog.velcdn.com/images/minari0v0/post/73c63f59-2c65-4bf0-aaab-7a5772f38441/image.png)
`npm run dev`로 로컬에서 실행 가능
*리액트+vite의 포트번호는 5173인것도 확인 가능*

---

### React를 Vite로 생성하면 기본 실행 흐름

```text
index.html → main.jsx → App.jsx
```

1. index.html

- 브라우저가 가장 먼저 읽는 파일

- `<div id="root"></div>` 라는 렌더링 지점을 가지고 있음

- `<script type="module" src="/src/main.jsx"></script>` 로 main.jsx를 불러옴

>앱의 시작점(Entry HTML)

2. main.jsx

- React 앱을 실제로 화면에 렌더링하는 역할

- `createRoot()`로 `#root`에 React를 연결

- `App.jsx`를 import 해서 렌더링함
```js
createRoot(document.getElementById('root')).render(
  <App />
)
```

>React와 브라우저를 연결하는 다리 역할

3. App.jsx

- 우리가 실제로 UI를 작성하는 컴포넌트

- 화면에 보이는 내용은 대부분 여기서 시작

>실제 화면(UI)의 시작 컴포넌트
