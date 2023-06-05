import React,{useState,useEffect}from "react";
import s from "../Module/Update.module.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function UpdateUser(){
    const [name,setName] = useState("");
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [post,setPost] = useState("");
    const {id}= useParams();
    const[user,setUser] = useState("");
    const navigate =useNavigate();

    useEffect(()=>{
        Axios.get("http://localhost:9000/admin-panel/user/update/"+id)
        .then(res=>{
            setUser(res.data);
            setName(res.data[0]?.name);
            setLogin(res.data[0]?.login);
            setPassword(res.data[0]?.password);
            setPhone(res.data[0]?.phone_number);
            setPost(res.data[0]?.post);
        })
        .catch(err=>console.log(err)); 
    },[])
    function handleSubmit(){
       Axios.put("http://localhost:9000/admin-panel/user/update/"+id, {
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
        <div className={s.abonentAbonent}>
            <div className={s.abonentPanel}>
                <div className={s.form}>
                    <h1>Обновление пользователя</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">ФИО</label>
                            <input type="text" placeholder={user[0]?.name} className={s.formControl}
                            onChange={e=>setName(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Логин</label>
                            <input type="text" placeholder={user[0]?.login} className={s.formControl}
                            onChange={e=>setLogin(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Пароль</label>
                            <input type="text" placeholder={user[0]?.password} className={s.formControl}
                            onChange={e=>setPassword(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Телефон</label>
                            <input type="text" placeholder={user[0]?.phone_number} className={s.formControl}
                            onChange={e=>setPhone(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Должность</label>
                            <input type="text" placeholder={user[0]?.post} className={s.formControl}
                            onChange={e=>setPost(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Обновить"/>
                </div>
            </div>
        </div>
    )
}
 

export default UpdateUser;