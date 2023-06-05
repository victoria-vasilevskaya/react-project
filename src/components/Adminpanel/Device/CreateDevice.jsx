import React,{useState,useEffect}from "react";
import s from "../Module/Create.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../DropDown/DropDown";


function CreateDevice(){
    const [idlan,setIdlan] = useState("");
    const [idabonent,setIdabonent] = useState("");
    const [cmmac,setCmmac] = useState("");
    const [cmip,setCmip] = useState("");
    const [cpemac,setCpemac] = useState("");
    const [cpeip,setCpeip] = useState("");
    const [vpnip,setVpnip] = useState("");
    const [vpnlogin,setVpnlogin] = useState("");
    const [vpnpass,setVpnpass] = useState("");
    const [balanse,setBalanse] = useState("");
    const [cmtsip,setCmtsip] = useState("");
    const [abonent,setAbonent] =useState([])
    
    const navigate =useNavigate();

    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/abonent')
        .then(res=>setAbonent(res.data))
        .catch(err=>console.log(err)); 
    },[])
    const options = abonent.map(function(abonent){
        return{
        value:abonent.id_abonent,label:abonent.surname+" "+abonent.name+" "+abonent.patronymic}})

    function handleSubmit(){
        Axios.post("http://localhost:9000/admin-panel/device/create", {
            idlan: idlan,
            idabonent: idabonent,
            cmmac: cmmac,
            cmip: cmip,
            cpemac: cpemac,
            cpeip: cpeip,
            vpnip: vpnip,
            vpnlogin: vpnlogin,
            vpnpass: vpnpass,
            balanse: balanse,
            cmtsip: cmtsip,
        }).then((response) => {
            navigate("/admin-panel/device")
        }).catch(err=>console.log(err));
    };
    return(
        <div className={s.createAddress}>
            <div className={s.createPanel}>
                <div className={s.form}>
                    <h1>Добавление Абонентского устройства</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Id lan</label>
                            <input type="text" placeholder="Введите id lan" className={s.formControl}
                            onChange={e=>setIdlan(e.target.value)}
                            ></input>
                    </div>
                    <div>
                    <label htmlFor="">Абонент</label>
                    <Dropdown
                    isSearchable
                    placeHolder="Абонент"
                    options={options}
                    onChange={(value) => setIdabonent(value.value)}
                    />
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CM MAC</label>
                            <input type="text" placeholder="Введите CM MAC" className={s.formControl}
                            onChange={e=>setCmmac(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CM IP</label>
                            <input type="text" placeholder="Введите CM IP" className={s.formControl}
                            onChange={e=>setCmip(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CPE MAC</label>
                            <input type="text" placeholder="Введите CPE MAC" className={s.formControl}
                            onChange={e=>setCpemac(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CPE IP</label>
                            <input type="text" placeholder="Введите CPE IP" className={s.formControl}
                            onChange={e=>setCpeip(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN IP</label>
                            <input type="text" placeholder="Введите VPN IP" className={s.formControl}
                            onChange={e=>setVpnip(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN LOGIN</label>
                            <input type="text" placeholder="Введите VPN LOGIN" className={s.formControl}
                            onChange={e=>setVpnlogin(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN PASS</label>
                            <input type="text" placeholder="Введите VPN PASS" className={s.formControl}
                            onChange={e=>setVpnpass(e.target.value)}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CMTS IP</label>
                            <input type="text" placeholder="Введите CMTS IP" className={s.formControl}
                            onChange={e=>setCmtsip(e.target.value)}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Добавить"/>
                </div>
            </div>
        </div>
    )
}
 

export default CreateDevice;