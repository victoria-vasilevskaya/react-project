import React from 'react';
import logo from './logo.svg';
import st from './login.module.css';

function Login() {
    return (
        <div className={st.page}>
            <div className={st.log}>
                <img src={logo}></img>
            </div>
            <div className={st.container}>
                <div className="caption">Вход в приложение</div>
                <div className={st.containerForm}>
                    <form>
                        <div className={st.inputLogin}>
                            <span>Логин</span>
                            <input></input>
                        </div>
                        <div className={st.inputPassword}>
                            <span>Пароль</span>
                            <input></input>
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