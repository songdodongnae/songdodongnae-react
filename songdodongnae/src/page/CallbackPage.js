import React, { useEffect, useState } from "react";
import { saveToken } from "../module/tokenStorage.js";

const CallbackPage = () => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    useEffect(() => {
        const fetchToken = async () => {
            console.log("saveToken 전");
            await saveToken(); // 비동기적으로 실행
            console.log("saveToken 후");
            setToken(localStorage.getItem("accessToken")); // 저장 후 가져오기
        };

        fetchToken();
    }, []);

    console.log("localStorage에서 가져온 토큰:", token);

    return (
        <div>
            <h3>Redirect Page 입니다.</h3>
            <h3>토큰 : {token}</h3>
        </div>
    );
};

export default CallbackPage;
