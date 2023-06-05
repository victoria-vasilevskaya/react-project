import React,{useState,useEffect}from "react";
import s from "../Module/Update.module.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function UpdateAddress(){
    const [street,setStreet] = useState("");
    const [house,setHouse] = useState("");
    const [flat,setFlat] = useState("");
    const [address,setAddress] = useState("")
    const {id}= useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        Axios.get("http://localhost:9000/admin-panel/address/update/"+id)
        .then(res=>{
            setAddress(res.data);
            setStreet(res.data[0]?.street);
            setHouse(res.data[0]?.house);
            setFlat(res.data[0]?.flat);
        })
        .catch(err=>console.log(err)); 
    },[])

    function handleSubmit(){
       Axios.put("http://localhost:9000/admin-panel/address/update/"+id, {
        street: street,
        house: house,
        flat: flat,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/address")
        }).catch(err=>console.log(err));
    };
    return(
        <div className={s.abonentAddress}>
            <div className={s.abonentPanel}>
                <div className={s.form}>
                    <h1>Обновление адреса</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Улица</label>
                            <input type="text" placeholder={address[0]?.street} className={s.formControl}
                            onChange={e=>{
                                setStreet(e.target.value)
                                if(e===""){setStreet(address[0]?.street)}
                            }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Дом</label>
                            <input type="text" placeholder={address[0]?.house} className={s.formControl}
                            onChange={e=>setHouse(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Квартира</label>
                            <input type="text" placeholder={address[0]?.flat} className={s.formControl}
                            onChange={e=>setFlat(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Обновить"/>
                </div>
            </div>
        </div>
    )
}
 

export default UpdateAddress;