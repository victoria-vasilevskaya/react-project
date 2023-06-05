import React,{useState}from "react";
import s from "./Auth.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
 

function Auth(){
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
                navigate("/abonent-device")
            }else{
                {alert("Неправильно введен логин или пароль")}
            }

        });
    };

    return (
    <div className={s.auth}>
        <div className={s.logo}><img src="../header/logo.svg" alt="лого" ></img></div>
    <div className={s.authform}>
       <div className={s.form}>
        <h3>Авторизаиция</h3>

        <label for="username">Логин</label>
        <input 
        type="text" 
        placeholder="Логин" 
        id="username"
        onChange={(e)=>{
            setUserName(e.target.value)
        }}></input>

        <label for="password">Пароль</label>
        <input 
        type="password" 
        placeholder="Пароль" 
        id="password"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>

        <button className={s.Authbtn}
        onClick={login}>Авторризоваться</button>
    </div>
    </div>
</div>
    )
}

export default Auth;