import React,{useState,useEffect}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../DropDown/DropDown";


function CreateAbonent(){
    
    
    const [surname,setSurname] = useState("");
    const [name,setName] = useState("");
    const [patronymic,setPatronymic] = useState("");
    const [idaddress,setIdaddress] = useState("");
    const [address,setAddress] =useState([])
    const navigate =useNavigate();
    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/address')
        .then(res=>setAddress(res.data))
        .catch(err=>console.log(err)); 
    },[])

    const options = address.map(function(address){
        return{
        value:address.id_address,label:address.street+" д."+address.house+" кв."+address.flat}})
    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/abonent/create", {
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
        <div className={s.createAbonent}>
            <div className={s.createPanel}>
                <div className={s.form}>
                    <h2>Добавление абонента</h2>
                    <div className={s.mb2}>
                            <label htmlFor="">Фамилия</label>
                            <input type="text" placeholder="Введите фамилию" className={s.formControl}
                            onChange={e=>setSurname(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Имя</label>
                            <input type="text" placeholder="Введите имя" className={s.formControl}
                            onChange={e=>setName(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">Отчество</label>
                            <input type="text" placeholder="Введите отчество" className={s.formControl}
                            onChange={e=>setPatronymic(e.target.value)}
                            ></input>
                    </div>
                    <div>
                    <label htmlFor="">Адрес</label>
                    <Dropdown
                    isSearchable
                    placeHolder="Выберите адрес"
                    options={options}
                    onChange={(value) => setIdaddress(value.value)}
                    />
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateAbonent;