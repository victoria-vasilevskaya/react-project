import React,{useState}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateAddress(){
    const [street,setStreet] = useState("");
    const [house,setHouse] = useState("");
    const [flat,setFlat] = useState("");
    const navigate =useNavigate();

    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/address/create", {
            street: street,
            house: house,
            flat: flat,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/address")
        }).catch(err=>console.log(err));
    };
    return(
        <div className={s.createAddress}>
            <div className={s.createPanel}>
                <div className={s.form}>
                    <h1>Добавление Адреса</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Улица</label>
                            <input type="text" placeholder="Введите улицу" className={s.formControl}
                            onChange={e=>setStreet(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Дом</label>
                            <input type="text" placeholder="Введите дом" className={s.formControl}
                            onChange={e=>setHouse(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Квартира</label>
                            <input type="text" placeholder="Введите квартиру" className={s.formControl}
                            onChange={e=>setFlat(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateAddress;