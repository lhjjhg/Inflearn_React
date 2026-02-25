import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    const countRef = useRef(0);
    const inputRef = useRef();

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


    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder='이름'
                />
                {input.name && <p>{input.name}님</p>}
            </div>
            <div>
                <input
                    name="birth"
                    type='date'
                    value={input.birth}
                    onChange={onChange}
                />
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}>
                    <option value=''>국가 선택</option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                    <option value='cn'>중국</option>
                </select>
            </div >

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                    placeholder="자기소개" />
            </div>
            <button onClick={onSubmit}>회원가입</button>
        </div >
    )
}



export default Register;