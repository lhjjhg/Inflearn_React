# **[JavaScript]** 4주차 React입문 (정현구)

## 1. 컴포넌트

```javascript
function App() {
  return (
    <>
      <h1>안녕!</h1>
    </>
  );
}
```

- 리액트에서는 자바스크립트 함수가 html태그를 반환하도록 하는데 이러한 함수를 컴포넌트라고 부름
- 컴포넌트를 부를때는 보통 함수의 이름을 따름 ex) App 컴포넌트
- 클래스로도 만들 수 있지만, 코드의 양이 많아지므로 클래스 보단 함수
- 함수의 이름은 반드시 첫 글자가 대문자

### 컴포넌트의 계층구조

```javascript
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}; // 자식 컴포넌트

function App() {
  return (
    <>
      <Header />
      <h1>안녕!</h1>
    </>
  );
} // 부모 컴포넌트
```

- 위에 Hedaer와 같은 컴포넌트를 렌더링 시켜주기 위해서는 부모 컴포넌트(App) return문에서 배치시켜줘야 함.
- 결론
  - 다른 컴포넌트의 리턴문 내부에 포함된 컴포넌트를 자식 컴포넌트
  - 자식 컴포넌트를 포함하는 App 컴포넌트를 부모 컴포넌트(또한 Root 컴포넌트)

## 2. JSX - UI로 표현하기

### jsx란?

- 확장된 자바스크립트 문법
- JSX = Javascript Extensions

### jsx 주의사항

1. 중괄호 내부에는 자바스크립트의 표현식만 넣을 수 있다.
   > 여기서 표현식이란 변수의 이름이나 삼항 연산자와 같은 특정 값으로 평가될 코드 (조건문, 반복문 X)
2. 숫자, 문자열, 배열 값만 렌더링 된다.
3. 모든 태그는 닫혀있어야 한다. ex) `<h1></h1>`
4. 최상위 태그는 반드시 하나여야만 한다.

```javascript
const Main = () => {
  const number = 10;
  const obj = { a: 1 };
  return (
    <main>
      <h1>Main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {10}
      {number}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
      {obj.a}
    </main>
  );
};

export default Main;
```

- {true}, {undefined}, {null}과 같은 값은 렌더링 되지 않음.
- 객체인 경우 {obj}로 할 수 없고 값을 지정해야 함.
- 최상위 태그는 `<main>`

### jsx 스타일 설정법

#### 1. DOM 요소 스타일 직접 적용

```javascript
<div style={{ backgroundColor: "red" }}>로그인</div>
```

- css 문법과 달리 연결되는 단어 Color에서 `-`이 아닌 첫문자를 `대문자`로(카멜케이스)
- 가독성이 떨어져 좋지 않음

#### 2. css파일을 별도로 만들어 스타일 적용

```javascript
return <div classNmae="logout">로그인</div>;
```

- css파일을 만들어 div 태그 안에 `className` 속성으로 설정
- JSX에서는 자바스크립트와 HTML을 함께 쓰기에 예약어인 `class`를 쓸 수 없음

## 3. Props - 컴포넌트에 값 전달하기

props란?

![](https://velog.velcdn.com/images/hyunguu/post/9b9a013d-c35b-4a11-9bbe-214bb6d48ff9/image.png)

- 프로퍼티, props(properties의 줄임말)
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용한다.
- props를 이요하면 컴포넌트를 마치 함수를 호출하듯 전달하는 값에 따라 각각 다른 UI를 렌더링 할 수 있음

- App.jsx

```javascript
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}
```

- Button.jsx

```javascript
const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
```

1. 객체 분해 할당과 스프레드 연산자
   - app.jsx에서 정의한 buttonProps 객체를 컴포넌트에 넘길 때 일일이 a={1} b={2}라고 쓰지 않아도 됨.
   - ...(스프레드 연산자)를 통해 객체 안 모든 속성을 Props로 펼쳐서 전달

2. Props의 기본값 설정
   - Button.jsx에서 매개변수 부분인`color = "black"` 을 통해 카페나 블로그와 같은 버튼에 값을 넘겨주지 않아 오류가 생기는 일을 방지
3. 구조 분해 할당
   - Button 컴포넌트 내부에서 Props.text쓰는 대신 바로 {text, color}로 받을 수 있음

4. children (컴포넌트 내부에 다른 요소 포함시킬때 사용)
   - 상위 컴포넌트 태그 사이에 넣은 내용은 자동으로 `children` 이름으로 Props에 전달
   - 단순히 텍스트만 넘기는게 아닌 다른 컴포넌트 자체를 통째로 넘길 수 있음

## 4. 이벤트 핸들링(Event Handling)

### 이벤트 핸들링이란?

- 웹에서 이벤트가 발생했을 때 그것을 처리하는 것  
  ex) 버튼 클릭시 경고창 노출

기본적인 이벤트 핸들러

```javascript
onClick={() => {
    console.log(text);
      }}
// 또는
const onClickButton = () => {
    console.log(text);
  };
<button onClick={onClickButton}>
```

- 주의할 점 : 콜백 함수를 전달하듯 함수 이름으로만 설정

### 합성 이벤트란?

- 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태

```javascript
const onClickButton = (e) => {
  console.log(e);
};
```

- 여기서 e가 합성 이벤트 객체
- 이를 통해 이벤트 발생 시 다양한 정보 또한 볼 수 있음

![](https://velog.velcdn.com/images/hyunguu/post/5bfb0407-bc8c-4804-a8fb-57128a4709a7/image.png)

## 5. State 상태관리하기

### state란?

- state, 즉 상태라는 건 어떠한 사물이 현재 가지고 있는 모양이나 또는 형편을 말함.
- 변화할 수 있는 동적인 값

![](https://velog.velcdn.com/images/hyunguu/post/91c2de1e-70df-4568-add3-3e4b5d7458ab/image.png)

![](https://velog.velcdn.com/images/hyunguu/post/c61a3da3-a86b-47f7-bfd0-8f2e2b76c69a/image.png)

```javascript
const [state, setState] = useState(0);
console.log(state);
```

- `state`는 값을 `setState`라는 변수에는 값을 변경시키는 함수가 들어옴

```javascript
 <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        +
      </button>
```

- `setState(state+1)`을 통해 state값을 1 증가
- 상태가 변경이 되면 App 함수를 처음부터 다시 실행해 `리렌더링`된다.

```javascript
const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
```

> 전구 끄기/켜기 예시

### 왜 let을 쓸 수 없을까?

-React 컴포넌트는 일반적인 변수가 아닌 state값이 변화했을 때만 리렌더링이 되기 때문

## 6. State와 Props

### 어떤 관계가 있는가?

- 리액트는 부모의 state를 자식의 Props로 전달하여 움직인다.

1. 부모가 버튼을 클릭해 자신의 State를 바꾼다.
2. 부모가 리렌더링되면서 바뀐 값을 자식의 Props로 넘겨준다.
3. 자식은 새로운 Props를 받았으므로 함께 리렌더링되며 화면이 바뀐다.

```javascript
function App() {
  const [light, setLight] = useState("OFF");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{light} <button onClick={() => setLight(...)}>전구 스위치</button></div>
      <div>{count} <button onClick={() => setCount(...)}>+</button></div>
    </>
  );
}
```

> 좋지 않은 예시

- 문제점
  - 카운터 버튼을 눌렀을 때에도 전구와 아무 상관없는 App이 리렌더링 되면서 전구 부분까지 불필요하게 다시 계산됨.

- 리렌더링되는 3가지 조건

1. State 변경: 컴포넌트 내부의 useState 값이 바뀔 때
2. Props 변경: 부모로부터 전달받은 속성 값이 바뀔 때
3. 부모 컴포넌트 리렌더링: 부모가 다시 그려지면, 자식은 아무 잘못이 없어도 무조건 같이 다시 그려짐

-> 3번째 이유로 리렌더링 되는 문제가 발생된다.

### 해결책은 무엇일까?

컴포넌트를 분리한다.

```javascript
function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
```

- Counter의 숫자를 올려도 부모인 App의 state가 바뀌는 것이 아니기 때문에, 옆에 있는 Bulb는 리렌더링되지 않는다.
- 더 나아가, 컴포넌트를 별도의 파일로 빼서 모듈화를 하면 더 효율적
  - src/components/Bulb.jsx
  - src/components/Counter.jsx

## 7. State 사용자 입력 관리하기

사용자 입력 예제 코드

```javascript
const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};
```

1. State를 활용한 제어 컴포넌트
   - `value={state}`: 입력창이 보여줄 값을 리액트의 State로 고정
   - `onChange={handler}`: 사용자가 키보드를 누를 때마다 State를 업데이트

2. 다양한 입력 타입 처리
   - `<input type="text">`: e.target.value로 문자열을 가져옴
   - `<input type="date">`: 날짜 선택기에서 고른 날짜도 문자열 형태로 가져옴
   - `<select>`: 드롭다운에서 선택한 option의 value 값을 가져옴
   - `<textarea>`: 여러 줄의 텍스트도 일반 input과 동일하게 처리
3. 이벤트 객체(e)의 역할
   - e.target은 현재 이벤트가 발생한 HTML 요소(여기서는 input창)를 가리킴
   - e.target.value는 그 요소에 입력된 현재의 값을 의미

> 위의 에제 코드를 보면 입력 항목들이 중복되어 비효율적이라고 느낌  
> 그러면 코드를 개선할려면 어떻게 할까?

### 1. 여러 개의 State를 하나의 객체로 통합

```javascript
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
```

### 2. 통합 이벤트 핸들러

```javascript
  const onChange = (e) => {
    setInput({
      ...input, // 기존의 값들을 그대로 복사 (스프레드 연산자)
      [e.target.name]: e.target.value, // 변경된 항목만 덮어쓰기 (계산된 프로퍼티명)
    });
  };

  return (
    <div>
      <div>
        <input
          name="name" // State의 key값과 일치시킴
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
```

## 8. useRef

### useRef란?

- 새로운 Reference객체를 생성하는 기능

![](https://velog.velcdn.com/images/hyunguu/post/891d5c4e-80ec-420c-8e05-15a600bbf52b/image.png)

> useRef와 useState차이점

- 컴포넌트 내부에서 사용할 변수를 생성한다는 점에서 동일하나
- useRef로 생성한 변수는 값이 바뀌더라도 리렌더링을 유도 X
- 컴포넌트가 렌더링하는 특정 DOM 요소에 접근

1. 변경 횟수 기록

```javascript
const countRef = useRef(0);

const onChange = (e) => {
  countRef.current++; // 입력할 때마다 1씩 증가
  console.log(countRef.current);
  // ...생략
};
```

- 사용자가 입력할 때마다 onChange가 실행되어 총 몇번의 이벤트가 발생했는 지 기록한다. State로 했다면 입력할 때마다 불필요한 리렌더링 발생

2. 유효성 검사 및 포커스

```javascript
const inputRef = useRef();
// ...
<input ref={inputRef} ... />
// ...
if (input.name === "") {
  inputRef.current.focus(); // 빈 이름일 경우 해당 입력창으로 커서 이동
}
```

- `inputRef.current`는 해당 `<input>` 태그 자체가 되어 커서를 이름 입력창에 옮겨주는 역할

## React Hooks

### React Hooks란?

- Class 컴포넌트에서만 이용할 수 있는 특수한 기능들을 함수 컴포넌트에서도 사용할 수 있게 도와주는 메서드

![](https://velog.velcdn.com/images/hyunguu/post/c240fa39-299f-4257-a38e-7ce5830c1697/image.png)

- 클래스 문법의 복잡함으로 함수 컴포넌트에서도 리액트의 모든 기능을 이용할 수 있게 낚아채듯 가져와서 사용 가능해짐.
- 앞서 본 `useState`,`useRef`도 React Hooks (20개 정도 더 있음)

### 3가지 Hook 관련 팁

1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 조건부로 호출될 수는 없다. (서로 다른 hook들의 호출 순서 엉망이 됨)
3. 나만의 훅(Custom Hook)을 직접 만들 수 있다. (이름은 접두사 use사용)

```javascript
import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}
const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
```

- useInput() 커스텀 훅을 통해 각각의 state를 가질 수 있게함.
- 함수의 중복을 최소화함.

대체적으로는 이러한 커스텀훅은 컴포넌트와 보통 같이 두지 않고 `src/Hooks`라는 별도 폴더 아래 보관함.
