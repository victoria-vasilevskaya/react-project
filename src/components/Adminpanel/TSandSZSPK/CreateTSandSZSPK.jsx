import React,{useState}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';


function CreateTSandSZSPK(){
    const [street,setStreet] = useState("");
    const [house,setHouse] = useState("");
    const [fio,setFIO] = useState("");
    const [phone,setPhone] = useState("");
    const [namets,setNamets] = useState("");
    const [compledate,setCompledate] = useState("");
    const [compens,setCompens] = useState("");
    const navigate =useNavigate();

    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/ts-szspk/create", {
            street: street,
            house: house,
            fio: fio,
            phone: phone,
            namets: namets,
            compldate: compledate,
            compens: compens,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/ts-szspk")
        }).catch(err=>console.log(err));
        swal.fire('ТС и ЖСПК добавлено.', '', 'success')
    };
    return(
        <div className={s.createAddress}>
            <div className={s.createPanel}>
                <div className={s.form}>
                    <h1>Добавление ТС и ЖСПК</h1>
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
                            <label htmlFor="">ФИО</label>
                            <input type="text" placeholder="Введите ФИО" className={s.formControl}
                            onChange={e=>setFIO(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Телефон</label>
                            <input type="text" placeholder="Введите телефон" className={s.formControl}
                            onChange={e=>setPhone(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Название ТС</label>
                            <input type="text" placeholder="Введите название ТС" className={s.formControl}
                            onChange={e=>setNamets(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Дата заключения</label>
                            <input type="text" placeholder="Введите дата заключения" className={s.formControl}
                            onChange={e=>setCompledate(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Compens</label>
                            <input type="text" placeholder="Введите compens" className={s.formControl}
                            onChange={e=>setCompens(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateTSandSZSPK;