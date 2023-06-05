import React,{useState}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateUser(){
    const [name,setName] = useState("");
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [post,setPost] = useState("");
    const navigate =useNavigate();

    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/user/create", {
            name: name,
            login: login,
            password: password,
            phone: phone,
            post:post,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/user")
        }).catch(err=>console.log(err));
    };
    return(
        <div className={s.createUser}>
            <div className={s.createPanel}>
                <div className={s.form}>
                    <h1>Добавление пользователя</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">ФИО</label>
                            <input type="text" placeholder="Введите ФИО" className={s.formControl}
                            onChange={e=>setName(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Логин</label>
                            <input type="text" placeholder="Введите логин" className={s.formControl}
                            onChange={e=>setLogin(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Пароль</label>
                            <input type="text" placeholder="Введите пароль" className={s.formControl}
                            onChange={e=>setPassword(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Телефон</label>
                            <input type="text" placeholder="Введите моб. телефон" className={s.formControl}
                            onChange={e=>setPhone(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Должность</label>
                            <input type="text" placeholder="Введите должность" className={s.formControl}
                            onChange={e=>setPost(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateUser;