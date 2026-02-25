# React 입문
## 컴포넌트

```js
function App() {

  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  )
}
```
- 위처럼 html 태그들을 반환하는 함수를 컴포넌트라고 부름
	- 보통 함수들의 이름대로 컴포넌트명이 됨(App 컴포넌트)
- 단, 컴포넌트(함수)의 이름은 **대문자 영어로 시작**되어야 리액트에서 인지함

## 자식·부모 컴포넌트

```js
const Header = () => { // 자식 컴포넌트
  return (
    <header>
      <h1>header</h1> 
    </header>
  )
}

function App() { // 부모 컴포넌트
  return (
    <>
      <Header /> {/* 나 요기 */}
      <h1>안녕 리액트!</h1>
    </>
  )
}
```
자식 컴포넌트: 다른 컴포넌트 내부에 삽입되는 컴포넌트
부모 컴포넌트: 자식 컴포넌트를 포함

## 모듈화
```plain
├── components // 컴포넌트 폴더
│   └── Header.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```
컴포넌트 폴더를 따로 생성하여, 그 속에서 Header와 같은 파일을 개발
그 후, App.jsx이나 부모 컴포넌트 파일에서 import로 불러와 사용

---

## JSX 란

JavaScriptExtensions 으로
확장된 자바스크립트 문법을 말함

```js
const Footer = () => {
    const myName = '미나리';

    return (
        <footer>
            <h1>안녕 내 이름 {myName}이야</h1>
        </footer>
    );
};

export default Footer;
```
위와 같이 중괄호 {} 안에 변수를 넣어 동적으로 값을 렌더링할 수 있음

### 주의사항

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
2. 숫자, 문자열, 배열 값만 렌더링 된다. 객체는 렌더링 되지 않는다.
3. 자바스크립트 표현식이란? 변수, 함수 호출, 삼항 연산자 등등
4. JSX 내부에서 주석을 작성할 때는 {/* */} 형태로 작성한다.
5. 최상위 요소는 하나여야 한다. 여러 개의 요소를 반환하려면 React.Fragment 또는 빈 태그 <> </>로 감싸야 한다.

---

`div` 태그 안에 `style` 속성으로 CSS 지정 가능  
- 일반 CSS 문법(`background-color`)이 아닌 **카멜 표기법(camelCase)** 사용 (예: `backgroundColor`)  
- `style`은 객체 형태로 작성  

````jsx
<div style={{ backgroundColor: "blue" }}>
  내용
</div>
````
`div` 안에 직접 작성 시 코드가 길어지고 가독성 저하 가능  

→ `/components` 폴더에 `파일.css` 생성 후 클래스 작성하여 `import` 방식 사용 권장  

이때 CSS 클래스 지정 시 `class`가 아닌 `className` 사용  

````jsx
import "./Box.css";

<div className="box">
  내용
</div>
````

---
## Props 

![](https://velog.velcdn.com/images/minari0v0/post/96a963c8-9c06-4e09-8586-a0803813c71f/image.png)

  
![](https://velog.velcdn.com/images/minari0v0/post/cebb8d1f-7623-4c84-8d8f-bc0e3f3996dc/image.png)

첫번째 네이버 포털 속 버튼 UI를 만들기 위해선 버튼 컴포넌트를 만들어서 이미지와 텍스트만 바꿔가며 렌더링 하면 될 것임

이 때, 각각 버튼(컴포넌트)에 전달된 값들을 **Props(Properties)**라고 함

```js
...
return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  )
```

버튼 컴포넌트를 사용하는 곳에서 위와 같은 props 가능

### props 기본값
```js
const Button = ({ text, color = "black" }) => {
    return <button style={{ color: color }}>
        {text}
    </button>
};
```
기본값 문법으로 기본값을 설정할 수 있음
<br>

```js
const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  )
  ```
  스프레드 연산자를 통해 많은 값을 전달 가능
  
#### children props
HTML 요소나 컴포넌트도 children prop로 전달 가능

```js
//App
<Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
---

//Button
const Button = ({ children, text, color = "black" }) => {
    return <button style={{ color: color }}>
        {text}
        {children}
    </button>
};
```

---

## 이벤트 헨들링
- 이벤트가 발생했을 때 그것을 처리하는 것
  - 예시) 버튼 클릭 시 경고창 노출
  
```js
<button
     onClick={onClickButton}
```
으로 클릭 시 이벤트 처리

<br>

```js
const onClickButton = (e) => {
        // 이벤트 객체
        console.log(e);
  ```

여기서 **e**란 **합성 이벤트 객체(SyntheticEvent)**이다.
- 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 래퍼(wrapper) 객체
- 모든 브라우저에서 동일한 인터페이스 제공
- 이벤트 위임 방식 사용
- 내부적으로는 nativeEvent를 포함함

---

![](https://velog.velcdn.com/images/minari0v0/post/14f509de-5f74-4840-9195-f697cf2a51f1/image.png)
브라우저마다 다른 이벤트 객체 때문에 일어나는 Cross Browsing Issue는
일종의 통일된 규격의 합성 이벤트 객체로 일어나지 않음.

---

## State
![](https://velog.velcdn.com/images/minari0v0/post/aa901e98-580a-4bfc-9add-eedf5aedb36d/image.png)

- 현재 가지고 있는 형태나 모양을 정의
  - 변화할 수 있는 동적인 값

리액트의 컴포넌트는 이런 State를 가질 수 있음

State의 변화를 통해 렌더링이 다시 진행되는 것을 Re-Render 혹은 Re-Rendering이라고 부른다.

```js
const state = useState(0);
console.log(state);
```
를 통해 state를 확인하면 
`[0, ƒ]` 처럼 배열 형태로 반환되는 걸 볼 수 있음

0 번째 인덱스에는 state의 값
1 번째 인덱스에는 상태 변화 함수

그래서 보통
`const [state, setState] = useState(0);`처럼
배열로 만들고, 필요한 것을 사용함

---

예시 코드
```js
const [light, setLight] = useState("off");

return(<>
...
<div>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "on" ? "off" : "on");
        }}>
        {light === "on" ? "끄기" : "켜기"}
      </button>
    </div>
</>
```

토글 버튼을 만들 수 있음

근데 강의 속 다른 수강자들은 의문점이 들었다고 한다.
> 🤷: light와 같은 state가 아닌 let 같은 일반 변수로는 안됨?

-> 일반 변수로는 리렌더링이 되지 않아 변화하지 않는다.

---

## State와 Props

![](https://velog.velcdn.com/images/minari0v0/post/cd000461-b56a-4709-b8f8-96fc0542efaf/image.png)

강의 때 작성한 예시 컴포넌트에서
위는 count, 아래는 light 라는 state인데,
카운트 버튼을 누르면 Bulb 속 colsole.log가 실행된다.

리액트 컴포넌트의 리렌더링 발생 상황

1. 자신이 관리하는 state의 값이 변경될 때
2. 자신이 제공받는 props의 값이 변경될 때
3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링 발생

3번을 이유로 자식 컴포넌트가 많아지면 성능이 안좋아질 수 밖에 없음
&rarr; 관련이 없는 것들은 다른 컴포넌트로 분리하는 것이 좋음

모듈화를 통해 분리하면 Best

---


## State로 사용자 입력 관리하기 


사용자 입력값을 관리할 때 가장 기본이 되는 방법은 `useState`

각 input, select, textarea에 대응하는 state를 만들고, onChange 이벤트에서 값을 업데이트하면 된다.

```js
//Register.jsx
...
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('한국');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      
      <input
        type="date"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />
      
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">국가 선택</option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
        <option value="uk">영국</option>
      </select>
    </div>
  );
};
```

1. **useState로 입력값 관리**  
   ```jsx
   const [name, setName] = useState('');
   ```

2. **value와 onChange 연결**  
   - `value` → state  
   - `onChange` → state 업데이트 함수  

3. **onChange에서 값 업데이트**  
   ```jsx
   setName(e.target.value);
   ```
   
--- 

위 예제 코드를 보면 많은 state들이 반복해서 있는데 이걸 객체표현처럼
작성할 수 있다. 이 때 onChange 내부에 ...input으로 나머지 state도 포함되어 있어야, 값이 유지도니다.

```js
...

const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })



    const onChangeName = (e) => {
        setInput({
            ...input,
            name: e.target.value,
        });
    };
	... 이어서 작성
```

<br>

개선: 공통 onChange 사용

```js
const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

...

<input
     name="name"
     value={input.name}
     onChange={onChange}
     placeholder='이름'
/>
       
```

---

## useRef
- 새로운 Reference 객체를 생성하는 기능

### useRef vs useState 비교

| 구분 | useRef | useState |
|------|--------|----------|
| 생성 | `const ref = useRef(initialValue)` | `const [state, setState] = useState(initialValue)` |
| 값 변경 | `ref.current = value` | `setState(value)` |
| 컴포넌트 내부 변수 활용 | ✅ 가능 | ✅ 가능 |
| 렌더링 영향 | ❌ 값 변경 시 컴포넌트 리렌더링 **안됨** | ✅ 값 변경 시 컴포넌트 리렌더링 **발생** |
| 용도 | DOM 접근, 이전 값 저장, 렌더링 영향 없는 값 | UI 상태 관리, 렌더링 반영 필요한 값 |
| 장점 | 렌더링 최적화, 불필요한 렌더링 방지 | 값 변경 시 UI 자동 업데이트 |
| 단점 | 값 변경해도 UI 반영 안 됨 | 빈번한 상태 변경 시 성능 부담 가능 |


```js
const refObj = useRef(0); //로 생성 시,
// {current: 0} 로 출력
```

**useRef**는 컴포넌트의 렌더링에 영향을 미치지 않는 변수를 생성할 때 활용

---

```js
...

const countRef = useRef(0);
const inputRef = useRef();

..
const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

const onSubmit = () => {
        if (input.name === "") {
            inputRef.current.focus();
            alert("이름을 입력해주세요.");
            return;
        }
        alert("회원가입 완료!");
    };
```
사용된 Ref는 사용자가 수정할 때 마다 count 해주는 것

>근데 useRef가 아니라 그냥 전역변수처럼 외부에다가 let count 해주면 되는거 아님?

&rarr; **"사실 그러면 count가 되긴 한다."**
하지만 컴포넌트를 여러 번 생성하면,
값이 모든 인스턴스에서 공유되어 의도치 않은 결과가 발생할 수 있다.

따라서 useRef를 사용하여 각 컴포넌트 인스턴스마다 독립적인 값을 유지하는 것이 안전하다.

---

## React Hooks
사실2017년도 이전의 리액트에서는
클래스 컴포넌트를 대부분 사용했다. 조금 전 본 [State, Ref, etc...]를 모두 사용 가능했다.
함수 컴포넌트는 UI 렌더링만 할 수 있었다.
하지만 클래스 컴포넌트는 문법이 복잡했고,
결국 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 쓸 수 있게 해주는 React Hooks가 되었다.

이미 use 가 앞에 붙어서 유추할 수 있다.
- useState
- useRef
- useEffect
- useReducer
..

해당 리액트 훅들은 **반복문**이나 **조건문**에서는 사용이 불가능하다.

3가지 Hook 팁

1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 조건부로 호출될 수 없음
3. 커스텀 훅을 직접 만들 수 있음

```js
// 입력값 상태와 onChange 로직을 재사용하는 커스텀 훅
function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange]; 
}

---

// 커스텀 훅을 사용하는 컴포넌트
const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;
```

- `useInput` 훅 안에서 **상태와 onChange 로직을 캡슐화**  
- 컴포넌트에서는 **배열 구조 분해**를 통해 쉽게 사용 가능  
- 여러 컴포넌트에서 **같은 입력 관리 로직 재사용** 가능  

여기서 커스텀 훅인 `useInput`은
```text
├── 📁 assets
├── 📁 components
├── 📁 hooks
...
```
components 폴더에 있는게아닌 따로 hooks 폴더를 만들어 그곳에서 관리하는게 좋다.
(물론 import문 작성 필수)