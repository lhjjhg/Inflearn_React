const Button = ({ children, text, color = "black" }) => {
    const onClickButton = (e) => {
        // e란 합성 이벤트 객체로 
        console.log(e);
        console.log(text);
    };

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}>
            {text}
            {children}
        </button>
    );
};

export default Button;

// 리액트 19 이후
// props를 구조분해할당 문법으로 받아오고,
// 기본값 문법으로 기본값을 설정