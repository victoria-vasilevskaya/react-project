import React, { useState } from 'react';
import logo from './logo.svg';
import st from './login.module.css';
import { useNavigate } from 'react-router-dom';

const users = [
    {login: "merid", password: "1234", role:'manager'},
    {login: "wert", password: "1111", role:'master'},
    {login: "perov", password: "228", role:''}
]; 

const user = [
  {
    login: "merid", 
    password: "1234", 
    role:'manager'
  }
]

const form = document.getElementById('form');

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  const handleLogin = () => {
    /* const login = form.login.value;
    const password = form.password.value;
    

    for (let e of JSON.parse(JSON.stringify(users))) {
        if ((e.login === login) && (e.password === password)) 
        { 

        }
    } */
    setIsLoggedIn(true);
    
    if (user.role === 'admin') {
      history('/admin');
    } else if ((user.role === 'manager') || (user.role === 'master')) {
      history('/journal');
    } else {
      history('/');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>logged</p>
      ) : ( 
          <form method="#" id="form" onSubmit={handleLogin}>
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
          </form >
          )}
          {/* <div className = {st.page}>
            <div className={st.log}>
              <img src={logo}></img>
            </div>
            <div className={st.container}>
              <div className={st.caption}>Вход в приложение</div>
              <div className={st.containerForm}>
                <form method="#" id="form" onSubmit={handleLogin}>
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
          </div> */}
      
    </div>
  );
}

export default LoginPage;