import React,{useState,useEffect}from "react";
import s from "../Module/Update.module.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert2';


function UpdateTSandSZSPK(){
    const [street,setStreet] = useState("");
    const [house,setHouse] = useState("");
    const [fio,setFIO] = useState("");
    const [phone,setPhone] = useState("");
    const [namets,setNamets] = useState("");
    const [compledate,setCompledate] = useState("");
    const [compens,setCompens] = useState("");
    const [tsandszspk,setTsandszspk] = useState([])
    const {id}= useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        Axios.get("http://localhost:9000/admin-panel/ts-szspk/update/"+id)
        .then(res=>{
            setTsandszspk(res.data);
            setStreet(res.data[0]?.street);
            setHouse(res.data[0]?.house);
            setFIO(res.data[0]?.fio);
            setPhone(res.data[0]?.phone_number);
            setNamets(res.data[0]?.name_ts);
            setCompledate(res.data[0]?.compl_date);
            setCompens(res.data[0]?.compens);
        })
        .catch(err=>console.log(err)); 
    },[])

    function handleSubmit(){
       Axios.put("http://localhost:9000/admin-panel/ts-szspk/update/"+id, {
            street: street,
            house: house,
            fio: fio,
            phone: phone,
            namets: namets,
            compldate: compledate,
            compens: compens,
        }).then((response) => {
            navigate("/admin-panel/ts-szspk")
        }).catch(err=>console.log(err));
        swal.fire('Данные ТСиЖСПК обновлены.', '', 'success')
    };
    return(
        <div className={s.abonentAddress}>
            <div className={s.abonentPanel}>
                <div className={s.form}>
                    <h1>Обновление ТС и ЖСПК</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Улица</label>
                            <input type="text" placeholder={tsandszspk[0]?.street} className={s.formControl}
                            onChange={e=>setStreet(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Дом</label>
                            <input type="text" placeholder={tsandszspk[0]?.house} className={s.formControl}
                            onChange={e=>setHouse(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">ФИО</label>
                            <input type="text" placeholder={tsandszspk[0]?.fio} className={s.formControl}
                            onChange={e=>setFIO(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Телефон</label>
                            <input type="text" placeholder={tsandszspk[0]?.phone_number} className={s.formControl}
                            onChange={e=>setPhone(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Название ТС</label>
                            <input type="text" placeholder={tsandszspk[0]?.name_ts} className={s.formControl}
                            onChange={e=>setNamets(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Дата заключения</label>
                            <input type="text" placeholder={tsandszspk[0]?.compl_date} className={s.formControl}
                            onChange={e=>setCompledate(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Compens</label>
                            <input type="text" placeholder={tsandszspk[0]?.compens} className={s.formControl}
                            onChange={e=>setCompens(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Обновить"/>
                </div>
            </div>
        </div>
    )
}
 

export default UpdateTSandSZSPK;