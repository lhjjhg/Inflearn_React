# React 컴포넌트 (Components)

```javascript
// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// app.jsx
import "./App.css";

function App() {
  return (
    <>
      <h1>hello React</h1>
    </>
  );
}

export default App;
```

![](https://velog.velcdn.com/images/leekh010502/post/1833dfad-33e2-4589-a0f8-1e2a87301427/image.png)

- app.jsx 파일에 html 태그를 반환하는 App이라는 함수가 있다.

- 리액트에서는 이런 자바스크립트 함수가 이렇게 html 태그를 반환하도록 설정할 수 있으며 **html 태그들을 반환하는 함수를 컴포넌트 (component)**라고 부른다.

- 컴포넌트를 부를 때에는 보통은 함수의 이름을 따서 부르게 되는데 위에 컴포넌트는 App 컴포넌트라고 부른다.

- 컴포넌트를 생성하는 함수의 이름을 **반드시 첫 글자가 대문자여야한다.**

- 함수 선언식 말고도 화살표 함수로 바꿔서 컴포넌트를 만들수도 있다. (편한 방법을 사용)

- 클래스를 이용해서 컴포넌트를 만들 수 있지만 직접 작성해야 되는 코드의 양이 많아지기 때문에 함수를 이용해서 컴포넌트를 만드는게 일반적이고 대중적이다.

## 자식/루트 컴포넌트

```javascript
// app.jsx
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
```

- app.jsx에 Header 컴포넌트를 추가하였다. 하지만 화면을 보면 header라는 문구가 보이지 않는다. main.jsx에서 render라는 메서드를 통해 화면에 렌더링하고 있는 컴포넌트는 App 컴포넌트이기 때문이다.

```javascript
function App() {
  return (
    <>
      <Header />
      <h1>hello React</h1>
    </>
  );
}

export default App;
```

- Header 컴포넌트를 화면에 렌더링 시켜주기 위해서는 App 컴포넌트 return문 안에 `<Header />`를 작성하면 된다. App 컴포넌트가 화면에 렌더링 될 때 Header 컴포넌트의 반환 값을 불러와서 함께 렌더링 시켜 주게 된다.

- Header 컴포넌트처럼 **다른 컴포넌트의 리턴문 내부에 포함된 컴포넌트를 자식 컴포넌트**라고 부른다. 반대로 App 컴포넌트는 부모 컴포넌트라고 부른다.

- 모든 컴포넌트들을 화면에 렌더링되기 위해서 App 컴포넌트의 자식 컴포넌트로서 존재해야한다.
  모든 컴포넌트들은 최상위 조상을 갖는 이러한 계층 구조이고, **App 컴포넌트는 모든 컴포넌트들의 뿌리 역할을 한다고 해서 루트 컴포넌트**라고 부르고 루트 컴포넌트는 결국 main.jsx라는 파일에 렌더 메서드의 인수로써 전달된 컴포넌트이기 때문에 원하는 대로 변경하는 것도 가능하다.
  하지만 대부분의 리액트 개발자들은 App이라는 이름을 갖는 컴포넌트를 루트 컴포넌트로 설정하기 때문에 변경은 잘 하지 않는 편이다.

![](https://velog.velcdn.com/images/leekh010502/post/195829d9-2c56-4a5f-b5de-405fa8e81a20/image.png)

## 컴포넌트 분리하기

보통의 컴포넌트들은 하나의 파일에 다 모아서 작성하기보다는 모듈화를 위해서 컴포넌트별로 각각 파일을 나눠서 작성하는게 일반적이다.
src 폴더 아래에 루트 컴포넌트인 App.jsx를 제외한 추가적인 컴포넌트들은 components라는 폴더를 아래에 작성한다.
App.jsx에 있던 Header 컴포넌트를 분리하고 컴포넌트를 추가로 만들어서 App.jsx에서 호출해서 사용해보자.

```javascript
// src/components/Header.jsx
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

export default Header;

// src/components/Main.jsx
const Main = () => {
  return (
    <main>
      <h1>main</h1>
    </main>
  );
};

export default Main;

// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer>
      <h1>footer</h1>
    </footer>
  );
};

export default Footer;
```

```javascript
// App.jsx
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```

ES 모듈 시스템으로 불러오고있음에도 파일 확장자를 리액트 앱에서는 생략해줘도 괜찮다.
vite로 만든 리액트 앱에서는 확장사를 안써도 자동으로 파일을 찾아가도록 내부적으로 자동 설정되어있기 때문이다.

![](https://velog.velcdn.com/images/leekh010502/post/4133c39a-e95b-420c-a08c-314fcfd067bf/image.png)

# JSX로 UI 표현하기

![](https://velog.velcdn.com/images/leekh010502/post/9813435d-ef50-4222-afc0-2abf8c469525/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/e85a648e-3b55-4e0c-9fcd-7881f0adc7af/image.png)

JSX를 사용하게 되면 Javascript와 html을 혼용하여 사용할 수 있다.

## JSX 주의 사항

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.

2. 숫자, 문자열, 배열 값만 렌더링 된다.

3. 모든 태그는 닫혀있어야 한다.

4. 최상위 태그는 반드시 하나여야만 한다.

## 조건에 따라 다른 UI 렌더링 해보기

```javascript
const Main = () => {
  const user = {
    name: "이규현",
    isLogin: true,
  };
  //return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
```

`user.isLogin` 값에 따라 서로 다른 JSX를 반환한다. 주석 처리된 삼항 연산자 버전과 동일한 동작이지만, 조건 분기가 복잡할수록 `if/else`가 더 읽기 쉽다.
삼항 연산자는 간단한 조건에, `if/else`는 여러 조건이 얽힌 경우에 쓰는 것이 일반적이다.

![](https://velog.velcdn.com/images/leekh010502/post/defd92c3-2a46-44b7-8e5c-011f5918eb9a/image.png)

## DOM 요소에 스타일 적용하기

### 1. 요소에 직접 스타일 속성을 설정

```javascript
if (user.isLogin) {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderBottom: "5px solid blue",
      }}
    >
      로그아웃
    </div>
  );
}
```

`style={{ }}` 에서 바깥 `{}`는 JSX 표현식을 나타내고, 안쪽 `{}`는 JavaScript 객체이다. CSS 속성명은 `background-color` 대신 camelCase인 `backgroundColor`로 작성한다. 값은 문자열로 전달한다.

리턴문 안에 스타일링 코드를 직접 작성하면, 스타일 규칙이 많아질수록 가동석이 점점 더 떨어질 수 있다.

### 2. 별도의 CSS 파일을 만들어 스타일링을 적용

```css
/* Main.css */
.logout {
  background-color: red;
  border-bottom: solid 5px blue;
}
```

```javascript
// Main.jsx
import "./Main.css"
... 코드 동일

if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  }
... 코드 동일
```

JSX에서는 Javascript와 html을 함께 사용하고 있어서 자바스크립트 예약어는 class를 사용할 수 없어서 className이라는 속성으로 class를 설정한다.

![](https://velog.velcdn.com/images/leekh010502/post/65f6bc79-6ddd-4240-834d-865fced6e167/image.png)

# Props로 데이터 전달하기

![](https://velog.velcdn.com/images/leekh010502/post/0fe1f7ac-0948-4572-bc3a-f3beca01ffe7/image.png)

네이버 페이지를 확인해보면 메뉴 버튼들이 있는데 아이콘 생김새만 각자 다르고 똑같은 UI를 하고 있기 때문에 버튼이라는 컴포넌트를 하나 만들어서 이미지와 텍스트만 바꿔서 여러 번 반복해서 렌더링을 설정해주면 된다.

![](https://velog.velcdn.com/images/leekh010502/post/e1366ea5-f1af-4d55-9c9b-4b70e9116f7c/image.png)

똑같은 구조의 각각의 Button 컴포넌트에 어떤 버튼을 렌더링할 것인지 결정하는 값을 전달해줘야 한다.

![](https://velog.velcdn.com/images/leekh010502/post/637ca8ea-14c7-44ab-ab3f-c97d2296cb41/image.png)

각각의 버튼들의 text와 img 값을 다르게 해서 전달하면 다르게 렌더링하게 된다.

![](https://velog.velcdn.com/images/leekh010502/post/6dbc728c-c72c-4689-adc8-0801a65222f3/image.png)

이렇듯이 리액트에서는 부모 컴포넌트가 자식 컴포넌트들에게 마치 함수의 인수를 전달하듯이 원하는 값을 전달해주는게 가능하다. 이때 컴포넌트에 전달된 값들을 **props**라고 부른다. 이때 props는 properties의 줄임말이다.

## props 적용해보기 - 1 (구조분해할당 -> react v19 이상)

```javascript
// src/App.jsx
import "./App.css";
import Button from "./components/Button";
function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} color={"blue"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;

// src/components/Button.jsx
const Button = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

export default Button;
```

`<Button text={"메일"} color={"red"} />`처럼 컴포넌트에 속성을 붙이는 방식으로 props를 전달한다.
Button 컴포넌트는 매개변수를 `{ text, color = "black" }` 형태로 구조 분해 할당해서 받는다. `color = "black"`은 기본값으로, `<Button text={"블로그"} />`처럼 color를 전달하지 않으면 자동으로 `"black"`이 사용된다.
`style={{ color: color }}`는 전달받은 color 값을 인라인 스타일로 적용한다.
![](https://velog.velcdn.com/images/leekh010502/post/3bfe79ef-5f43-4ef7-81c2-6384655a3265/image.png)

## props 적용해보기 - 2 (하나의 객체로 묶어서 spread 연산자로 전달)

```javascript
// src/App.jsx
import "./App.css";
import Button from "./components/Button";
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
      <Button text={"카페"} color={"blue"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
```

`{...buttonProps}`는 스프레드 연산자로, 객체의 속성들을 개별 prop으로 풀어서 전달한다. `<Button text="메일" color="red" a={1} b={2} c={3} />`과 완전히 동일하게 동작한다. 전달할 prop이 많을 때 코드를 간결하게 만들 수 있다.

## props 적용해보기 - 3 (htnml 요소나 react 컴포넌트 전달)

```javascript
// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
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
      <Button text={"카페"} color={"blue"}>
        <Header />
      </Button>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;

// src/components/Button.jsx
export default App;

const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
```

컴포넌트 태그 사이에 넣은 내용`(<Header />, <div>자식 요소</div>)`은 자동으로 `children`이라는 이름의 prop으로 전달된다. Button 컴포넌트에서 `{children}`을 원하는 위치에 렌더링하면 된다. 컴포넌트뿐 아니라 일반 HTML 요소도 children으로 전달할 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/4d33b69d-3edf-464e-b956-3a3e69a399d6/image.png)

# 이벤트 처리하기 (이벤트 핸들링)

## 이벤트 핸들링이란?

- 이벤트란?
  웹 내부에서 발생하는 사용자의 행동이다.
  ex) 버튼 클릭, 메시지 입력, 스크롤 등등

- 핸들링이란?
  다루다, 취급하다, 처리하다라는 뜻을 가지고 있다.

- 이벤트 핸들링이란?
  이벤트가 발생했을 때 그것을 처리하는 것 (웹에서 발생하는 사용자들의 행동을 처리해 준다.)
  ex) 버튼 클릭시 경고창 노출

## Button.jsx 이벤트 핸들러 추가

```jsx
const Button = ({ children, text, color = "black" }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
```

`onClick={onClickButton}`처럼 이벤트 속성에 함수 자체를 전달한다. `onClick={onClickButton()}`처럼 괄호를 붙이면 렌더링 시점에 즉시 실행되어 버리니 주의해야 한다.
주석의 `onMouseEnter`처럼 다양한 이벤트 속성을 동일한 방식으로 사용할 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/c9bc08ab-d45a-4e06-950c-9dbf1f4f52f1/image.png)

## 이벤트 객체

리액트에서 발생하는 모든 이벤트들은 클릭이나 마우스 엔더 같은 모든 이벤트는 이벤트 핸들러 함수를 호출하면서 호출된 이벤트 핸들러 함수에 매개 변수로 이벤트 객체라는 것을 제공한다.

e라는 매개변수를 선언하고 콘솔에 출력해보자

```javascript
const onClickButton = (e) => {
  console.log(text);
};
```

![](https://velog.velcdn.com/images/leekh010502/post/d1c51eb3-177a-419d-b899-1d0d66d46272/image.png)

SyntheticBaseEvent라는 객체가 출력이 되는데 이 SyntheticBaseEvent라는 객체가 매개변수 e에 저장된 이벤트 객체이다.
SynthticBaseEvent에서 Synthetic이 합성이라는 단어의 뜻이고, 합성 이벤트 객체다.라는 뜻으로 이해하면 된다.

### 합성 이벤트란?

모든 브라우저의 이벤트 객체를 하나의 포맷으로 통일한 그런 형태를 말한다.

![](https://velog.velcdn.com/images/leekh010502/post/03de37c9-e009-4bab-b1a1-27a497b3512a/image.png)

지금 살고 있는 세상에는 브라우저가 많고 각자 다른 회사에서 만들었기 때문에 웹브라우저마다 동작하는 방식이 조금씩 다 다르다.

![](https://velog.velcdn.com/images/leekh010502/post/a866fd37-5083-442e-88fd-f9d481213c8b/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/21ea061e-3329-41a3-921d-41a6f4415a7a/image.png)

브라우저마다 규격도 다르고 동작 방식도 달라서 생겨버리는 이러한 문제를 Cross Browsing Issue라고 부르는데 이 Cross Browsing Issue를 아주 편리하게 해결해주는 것이 바로 React에 합성 이벤트라는 객체이다.

![](https://velog.velcdn.com/images/leekh010502/post/fd63dbec-9b84-456c-80ab-f42501889133/image.png)

이 합성 이벤트 객체는 여러 브라우저들의 규격을 참고해서 하나의 통일된 규격으로 이벤트 객체를 포맷팅해준다.

# State로 상태관리하기

State란 우리 말로 상태를 뜻한다.
![](https://velog.velcdn.com/images/leekh010502/post/91cb2019-3e65-4e45-ac73-46fdf1d2ac29/image.png)
일상으로 예를 들면 전구와 on/off 상태를 예로 들수 있다.

이렇듯 State는 현재 가지고 있는 형태나 모양을 정의하는 값이면서 또 동시에 변화할 수 있는 동적인 값이기도 하다.

![](https://velog.velcdn.com/images/leekh010502/post/78e47d9b-7ac2-47fa-8dcf-5e417e3b6db2/image.png)

React의 컴포넌트들은 모두 다 자신의 형태나 모양을 정의하는 이런 state를 가질 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/65733f58-1b8f-44a8-964c-9c50067d67b4/image.png)
State는 컴포넌트의 현재 상태를 보관하는 변수이다. 그러므로 State를 갖는 컴포넌트들은 이 Status 값에 따라서, 즉 현재의 상태에 따라서 각각 다른 UI를 화면에 렌더링하게 된다.

![](https://velog.velcdn.com/images/leekh010502/post/714afd03-6a0d-4580-accb-2768fddb4e62/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/27052ec7-461c-43bf-9854-0079ca2ba615/image.png)

전구를 렌더링하는 컴포넌트를 만들었다고 하면이 컴포넌트의 현재 상태에 따라 렌더링 결과가 바뀌게 된다.

컴포넌트가 다시 렌더링 되는 상황을 리액트에서는 **Re-Render** 또는 **Re-Rendering**이라고 부른다.

![](https://velog.velcdn.com/images/leekh010502/post/365bc13f-e38e-4e99-befc-dd0057466300/image.png)
하나의 컴포넌트에 여러개의 State를 만드는 것도 가능하다.

## State 실습해보기

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  const state = useState(0);
  console.log(state);
  return <></>;
}

export default App;
```

`useState(0)`을 호출하면 `[0, f]` 형태의 배열이 반환된다. 첫 번째 요소는 현재 State 값(초기값 0), 두 번째 요소는 State를 변경하는 함수이다. 여기서는 구조 분해 없이 배열 자체를 콘솔로 확인하는 예시이다.

![](https://velog.velcdn.com/images/leekh010502/post/330c9a5d-14fe-482d-8ca8-448d77982bff/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/8fa838ba-2313-4556-9dec-6bca461645bf/image.png)

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
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
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
```

`useState`의 반환값을 구조 분해 할당으로 `[현재값, set함수]` 형태로 받는다.
버튼 클릭 시 `setLight`, `setCount`를 호출하면 State가 변경되고, React가 변화를 감지해 컴포넌트를 자동으로 리렌더링한다.
`light === "ON" ? "OFF" : "ON"` 삼항 연산자로 현재 값에 따라 반대 값으로 토글한다.
State를 직접 `count = count + 1`처럼 수정하면 React가 변화를 감지하지 못해 화면이 바뀌지 않는다. 반드시 `set` 함수를 사용해야 한다.

![](https://velog.velcdn.com/images/leekh010502/post/868ce450-3678-4a4f-960d-1e43dc32654e/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/c5e6cd5a-c8d9-49da-aa9d-6ab0faa6d904/image.png)

# State와 Props

## State를 Props로 전달하기

```jsx
import "./App.css";
import { useState } from "react";

const Bulb = ({ light }) => {
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  console.log(light);
  console.log(count);
  return (
    <>
      <div>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
```

App의 `light` State를 `<Bulb light={light} />`로 Bulb 컴포넌트에 prop으로 내려준다.
Bulb는 전달받은 `light` prop 값에 따라 배경색이 다른 UI를 렌더링한다.
이처럼 State는 부모가 관리하고, 자식은 prop으로 받아 화면만 담당하는 패턴이 일반적이다.
단, 이 구조에서는 `count`가 바뀌어도 App 전체가 리렌더링되면서 Bulb도 함께 리렌더링되는 문제가 있다.

![](https://velog.velcdn.com/images/leekh010502/post/d89dfe3c-2ad4-41b7-b9d5-1305a29a1a17/image.png)

## 불필요한 Re-Rendering 방지 및 컴포넌트 분리

```jsx
import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
```

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
```

```jsx
import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```

`light` State를 Bulb 내부로, `count`State를 Counter 내부로 각각 이동시켰다.
이제 Bulb의 State가 바뀌어도 Counter는 리렌더링되지 않고, Counter의 State가 바뀌어도 Bulb는 리렌더링되지 않는다.
State는 그것을 사용하는 컴포넌트 안에 두는 것이 불필요한 리렌더링을 막는 핵심 원칙이다.
![](https://velog.velcdn.com/images/leekh010502/post/3c22490e-ad61-491e-917f-509bed86dbe9/image.png)

# State로 사용자 입력 관리하기

회원정보를 받는 폼을 만들어서 확인해보자.

## State로 사용자 입력 관리하기 (1)

```javascript
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
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
        {name}
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
        {birth}
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
  );
};

export default Register;
```

입력 필드마다 각각의 State와 onChange 핸들러를 만들었다.
`e.target.value`는 사용자가 입력한 현재 값을 가져온다.
`value={name}`처럼 State를 input의 value에 연결하는 것을 제어 컴포넌트(Controlled Component) 패턴이라고 한다. 입력값이 항상 State와 동기화된다.
입력 필드가 늘어날수록 State와 핸들러도 같이 늘어나 코드가 길어지는 단점이 있다.

![](https://velog.velcdn.com/images/leekh010502/post/0ac5e39a-d34b-46ff-a55b-cae52d8e505b/image.png)

## State로 사용자 입력 관리하기 (2)

```jsx
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
```

모든 입력값을 객체 하나로 묶어 State를 관리한다. `onChange` 함수도 하나로 통합된다.
`...input`으로 기존 값을 모두 유지하면서, `[e.target.name]: e.target.value`로 변경된 필드만 덮어쓴다. `[]` 안에 변수를 넣으면 그 변수의 값이 키 이름이 되는 계산된 속성명(Computed Property Name) 문법이다.
각 input 태그에 `name` 속성을 붙여줘야 `e.target.name`으로 어떤 필드가 변경됐는지 식별할 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/dbfc5f23-9187-4fa9-80cb-498e53d6a51e/image.png)

# useRef로 컴포넌트의 변수 생성하기

## useRef란?

**useReference**의 줄임말로 새로운 Reference 객체를 생성하는 기능이다.
![](https://velog.velcdn.com/images/leekh010502/post/4fbdee66-5140-4100-ae97-8cf595e799e7/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/f1cd67cf-d71e-46fd-99b3-90175e66d3ba/image.png)

## useRef와 useState

![](https://velog.velcdn.com/images/leekh010502/post/cfb02487-c754-41d7-9903-ca91ee822d5c/image.png)

## 적용해보기

```jsx
import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef(0);

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
    }
  };
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
```

`countRef.current++`는 입력할 때마다 카운트를 증가시키지만 리렌더링을 발생시키지 않는다. 화면에 표시할 필요 없는 값을 추적할 때 유용한다.
`inputRef`는 `<input ref={inputRef} />`로 실제 DOM input 요소와 연결된다. 이후 `inputRef.current.focus()`로 해당 input에 포커스를 직접 줄 수 있다. 이름 미입력 상태로 제출 버튼을 클릭하면 이름 입력창으로 포커스가 이동한다.

![](https://velog.velcdn.com/images/leekh010502/post/a39055f4-1210-4c3c-bd42-6cd2b02fface/image.png)

# React Hooks

## React Hooks란?

class 컴포넌트에서만 이용할 수 있는 리액트의 특수한 기능을 함수 컴포넌트에서도 사용할 수 있도록 도와주는 메서드들을 말한다.

![](https://velog.velcdn.com/images/leekh010502/post/f493a507-1f9f-4466-a2e3-a7cc6331051c/image.png)

앞에서 배운 **useState**와 **useRef**는 모두 React Hooks이다.
이름 앞에 동일한 접두사 **use**가 붙고, 각각에 메서드는 Hook이라고 부른다.

**useState** - State 기능을 낚아채오는 Hook
**useRef** - Reference 기능을 낚아채오는 Hook

![](https://velog.velcdn.com/images/leekh010502/post/4a04c6d5-d200-4345-a389-e6adcd8391cb/image.png)
React Hook에는 **useState** **useRef**외에도 더 존재한다.

![](https://velog.velcdn.com/images/leekh010502/post/f82785eb-bc90-4461-aadd-d802de1e4426/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/a74e66fe-8766-4210-add7-bc0a7dd49a0a/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/9d66bd37-9be2-47ad-b9cd-e3de81f8784d/image.png)

## 실습

```jsx
// src/components/hookExam.jsx
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
```

입력 처리 로직을 `useInput`이라는 커스텀 Hook으로 분리했다. 내부에서 `useState`를 사용하고 `[현재값, 핸들러]` 배열을 반환한다. `use`로 시작하는 함수 안에서 다른 Hook을 호출하는 것이 커스텀 Hook의 핵심 규칙이다.

```jsx
// src/hooks/useInput.jsx
import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
```

`useInput()`을 두 번 호출해 각각 독립적인 State와 핸들러를 만들었다. 같은 로직을 여러 곳에서 재사용할 수 있어 코드 중복을 크게 줄일 수 있다. 커스텀 Hook은 `src/hooks/` 폴더 안에 모아두는 것이 일반적인 컨벤션이다
