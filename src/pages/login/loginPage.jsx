import React, { useState, useRef, useContext, useEffect } from 'react';
import logo from './logo.svg';
import st from './login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {
  
  const [loginn, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios
      .get('http://localhost:5000/api/user/all')
      .then(data => {
        setUsers(data.data)
      })
  }, [])

  const history = useNavigate();

  const handleLogin = () => { //функция проверки пользователя в системе
    users.map(user => {   //перебор массива пользователей 
      if (user.login === loginn && user.password === password) {
        localStorage.setItem("userId", user.id_user) 
        localStorage.setItem("username", user.name) //сохранение в localstorage данных для шапки страницы
        localStorage.setItem("role",user.role)
        if (user.role === "Администратор") { //перенаправление по страницам
          history('/admin');
        } else if (user.role === "Менеджер") {
          history('/journal');
        }
        else if(user.role === "Мастер"){
          history('/master');
        }
        else {
          history('/');
        }
      } else {
        return { message: "Неправильно набран логин или пароль" }
      }
    })
  }
    
  return (
    <div>
      <div className={st.page}>
        <div className={st.log}>
          <img src={logo}></img>
        </div>
        <div className={st.container}>
          <div className={st.caption}>Вход в приложение</div>
          <div className={st.containerForm}>
            <form method="#" id="form">
              <div className={st.inputLogin}>
                <span>Логин</span>
                <input id="login" type="text" name="login" value={loginn} onChange={e => setLogin(e.target.value)}></input>
              </div>
              <div className={st.inputPassword}>
                <span>Пароль</span>
                <input id="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
              </div>
              <button type='submit' className={st.btn} onClick={handleLogin}>Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
)}

export default LoginPage