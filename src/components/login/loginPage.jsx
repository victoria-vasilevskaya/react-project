import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import st from './login.module.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import Axios from "axios";



function LoginPage (){
  
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const navigate =useNavigate();

    const login = () => {
        Axios.post("http://localhost:9000/auth", {
            username: userName,
            password: password,
        }).then((response) => {
            if(response.data[0]?.post==="Администратор"){
                navigate("/admin-panel")
            } 
            else if(response.data[0]?.post==="Менеджер" || response.data[0]?.post==="Мастер"){
              localStorage.setItem("username", response.data[0]?.name) //сохранение в localstorage данных для шапки страницы
              localStorage.setItem("role",response.data[0]?.post)
                navigate("/abonent-device")
            }else{
                {swal.fire('Неверный логин или пароль.')}
            }

        });
    };

  return (
      <div className={st.page}>
        <div className={st.log}>
          <img src={logo}></img>
        </div>
        <div className={st.container}>
          <div className={st.caption}>Вход в приложение</div>
          <div className={st.containerForm}>
            <div className={st.form}>
              <div className={st.inputLogin}>
                <span>Логин</span>
                <input id="login" type="text" name="login" value={userName} onChange={e => setUserName(e.target.value)}></input>
              </div>
              <div className={st.inputPassword}>
                <span>Пароль</span>
                <input id="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
              </div>
              <button className={st.btn} onClick={login}>Войти</button>
            </div>
          </div>
        </div>
      </div>
)}

export default LoginPage;