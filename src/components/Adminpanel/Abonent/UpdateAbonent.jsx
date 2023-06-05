import React,{useState,useEffect}from "react";
import s from "../Module/Update.module.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../../DropDown/DropDown";


function UpdateAbonent(){
    const [surname,setSurname] = useState("");
    const [name,setName] = useState("");
    const [patronymic,setPatronymic] = useState("");
    const [idaddress,setIdaddress] = useState("");
    const [abonent,setAbonent] = useState("");
    const [addressset,setAddressset] = useState("");
    const [address,setAddress] =useState([])
    const {id}= useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/address')
        .then(res=>setAddress(res.data))
        .catch(err=>console.log(err)); 
    },[])

    const options = address.map(function(address){
        return{
        value:address.id_address,label:address.street+" д."+address.house+" кв."+address.flat}})

    useEffect(()=>{
        Axios.get("http://localhost:9000/admin-panel/abonent/update/"+id)
        .then(res=>{
            setAbonent(res.data);
            setSurname(res.data[0]?.surname);
            setName(res.data[0]?.name);
            setPatronymic(res.data[0]?.patronymic);
            setIdaddress(res.data[0]?.id_address);
            setAddressset(res.data[0]?.street+" "+res.data[0]?.house+" "+res.data[0]?.flat);
        })
        .catch(err=>console.log(err)); 
    },[])

    function handleSubmit(){
       Axios.put("http://localhost:9000/admin-panel/abonent/update/"+id, {
            surname: surname,
            name: name,
            patronymic: patronymic,
            idaddress: idaddress,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/abonent")
        }).catch(err=>console.log(err));
    };
    return(
        <div className={s.abonentAbonent}>
            <div className={s.abonentPanel}>
                <div className={s.form}>
                    <h1>Обновление абонента</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Фамилия</label>
                            <input type="text" placeholder={abonent[0]?.surname} className={s.formControl}
                            onChange={e=>{
                                setSurname(e.target.value)
                                if(e===""){setSurname(abonent[0]?.surname)}
                            }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Имя</label>
                            <input type="text" placeholder={abonent[0]?.name} className={s.formControl}
                            onChange={e=>{
                                setName(e.target.value)
                                if(e===""){setName(abonent[0]?.name)}
                            }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Отчество</label>
                            <input type="text" placeholder={abonent[0]?.patronymic} className={s.formControl}
                            onChange={e=>{
                                setPatronymic(e.target.value)
                                if(e===""){setPatronymic(abonent[0]?.patronymic)}
                            }}
                            ></input>
                    </div>
                     <div>
                    <label htmlFor="">Адрес</label>
                    <Dropdown
                    isSearchable
                    placeHolder={addressset}
                    options={options}
                    onChange={(e) => {
                        setIdaddress(e.value)
                        if(e===""){setIdaddress(abonent[0]?.id_address)}
                    }}
                    />
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Обновить"/>
                </div>
            </div>
        </div>
    )
}
 

export default UpdateAbonent;