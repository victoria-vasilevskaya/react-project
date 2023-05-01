import React from 'react';
import logo from './logo.svg';
import st from './login.module.css';


const users = [
    {login: "ametr", password: "1234"},
    {login: "wert", password: "1111"},
    {login: "perov", password: "228"}
]; 

const form = document.getElementById('form');

function getFormValue(event) {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    

    for (let e of JSON.parse(JSON.stringify(users))) {
        if ((e.login === login) && (e.password === password)) 
        { 
            alert("Авторизован")
        }
    }
}

function Login() {

    document.addEventListener('DOMContentLoaded', function () {
        form.addEventListener('submit', getFormValue);
    });

    return (
        <div className={st.page}>
            <div className={st.log}>
                <img src={logo}></img>
            </div>
            <div className={st.container}>
                <div className={st.caption}>Вход в приложение</div>
                <div className={st.containerForm}>
                    <form method="#" id="form" onSubmit={getFormValue}>
                        <div className={st.inputLogin}>
                            <span>Логин</span>
                            <input id="login" type="text" name="login"></input>
                        </div>
                        <div className={st.inputPassword}>
                            <span>Пароль</span>
                            <input id="password" type="text" name="password"></input>
                        </div>
                        <div className={st.inputCheckBox}>
                            <input type="checkbox"></input>
                            <span>Запомнить меня</span>
                        </div>
                        <button type='submit' className={st.btn}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;