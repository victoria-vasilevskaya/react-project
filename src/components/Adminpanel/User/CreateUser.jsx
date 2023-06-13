import React,{useState}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../DropDown/DropDown";
import swal from 'sweetalert2';

function CreateUser(){
    const [name,setName] = useState("");
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [post,setPost] = useState("");
    const navigate =useNavigate();
    const options=[  
{value:"Администратор", label: 'Администратор'},
{value: "Мастер", label: 'Мастер'},
{value: "Менеджер", label: 'Менеджер'}
    ];

    

    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/user/create", {
            name: name,
            login: login,
            password: password,
            phone: phone,
            post:post,
        }).then((response) => {
            navigate("/admin-panel/user")
        }).catch(err=>console.log(err));
        swal.fire('Пользователь добавлен.', '', 'success')
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
                    <div>
                    <label htmlFor="">Должность</label>
                    <Dropdown
                    isSearchable
                    placeHolder="Выберите должность"
                    options={options}
                    onChange={(value) => setPost(value.value)}
                    />
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateUser;