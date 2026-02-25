import './Main.css';
// 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 객체는 렌더링 되지 않는다.
// 3. 자바스크립트 표현식이란? 변수, 함수 호출, 삼항 연산자 등등
// 5. JSX 내부에서 주석을 작성할 때는 {/* */} 형태로 작성한다.
// 6. 최상위 요소는 하나여야 한다. 여러 개의 요소를 반환하려면 React.Fragment 또는 빈 태그 <> </>로 감싸야 한다.

const Main = () => {
    const user = {
        name: '미나리',
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className='logout'>{user.name}님 환영합니다.</div>
    } else {
        return <div>로그인 해주세요.</div>
    }
};

export default Main;