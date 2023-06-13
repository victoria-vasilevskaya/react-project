import React,{useState,useEffect}from "react";
import s from "../Module/Update.module.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../../DropDown/DropDown";
import swal from 'sweetalert2';

function UpdateDevice(){
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
    const [device,setDevice] = useState([]);
    const [abonent,setAbonent] =useState([])
    const [abonentset,setAbonentSet] = useState("");
    const {id}= useParams();
    const navigate =useNavigate();

        

    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/abonent')
        .then(res=>setAbonent(res.data))
        .catch(err=>console.log(err)); 
    },[])
    const options = abonent.map(function(abonent){
        return{
        value:abonent.id_abonent,label:abonent.surname+" "+abonent.name+" "+abonent.patronymic}})

    useEffect(()=>{
        Axios.get("http://localhost:9000/admin-panel/device/update/"+id)
        .then(res=>{
            setDevice(res.data);
            setIdlan(res.data[0]?.id_lan);
            setIdabonent(res.data[0]?.id_abonent); 
        setAbonentSet(res.data[0]?.surname+" "+res.data[0]?.name+" "+res.data[0]?.patronymic);
        setCmmac(res.data[0]?.cm_mac);
        setCmip(res.data[0]?.cm_ip);
        setCpemac(res.data[0]?.cpe_mac);
        setCpeip(res.data[0]?.cpe_ip);
        setVpnip(res.data[0]?.vpn_ip);
        setVpnlogin(res.data[0]?.vpn_login);
        setVpnpass(res.data[0]?.vpn_pass);
        setBalanse(res.data[0]?.balance);
        setCmtsip(res.data[0]?.cmts_ip);
        })
        .catch(err=>console.log(err)); 
    },[])

    function handleSubmit(){
        console.log(idlan);
       Axios.put("http://localhost:9000/admin-panel/device/update/"+id, {
        idlan: idlan,
        idabonent: idabonent,
        cmmac: cmmac,
        cmip: cmip,
        cpemac: cpemac,
        cpeip: cpeip,
        vpnip: vpnip,
        vpnlogin: vpnlogin,
        vpnpass: vpnpass,
        cmtsip: cmtsip,
        }).then((response) => {
            console.log(response)
            navigate("/admin-panel/device")
        }).catch(err=>console.log(err));
        swal.fire('Данные абонентского устройство обновлены.', '', 'success')
    };
    return(
        <div className={s.abonentAddress}>
            <div className={s.abonentPanel}>
                <div className={s.form}>
                    <h1>Обновление информации об абонентском устройстве</h1>
                    <div className={s.mb2}>
                            <label htmlFor="">Id lan</label>
                            <input type="text" placeholder={device[0]?.id_lan} className={s.formControl}
                            onChange={e=>{
                                setIdlan(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div>
                    <label htmlFor="">Абонент</label>
                    <Dropdown
                    isSearchable
                    placeHolder={abonentset}
                    options={options}
                    onChange={(value) => {
                        setIdabonent(value.value)
                }}
                    />
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CM MAC</label>
                            <input type="text" placeholder={device[0]?.cm_mac} className={s.formControl}
                            onChange={e=>{
                                setCmmac(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CM IP</label>
                            <input type="text" placeholder={device[0]?.cm_ip} className={s.formControl}
                            onChange={e=>{
                                setCmip(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CPE MAC</label>
                            <input type="text" placeholder={device[0]?.cpe_mac} className={s.formControl}
                            onChange={e=>{
                                setCpemac(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CPE IP</label>
                            <input type="text" placeholder={device[0]?.cpe_ip} className={s.formControl}
                            onChange={e=>{
                                setCpeip(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN IP</label>
                            <input type="text" placeholder={device[0]?.vpn_ip} className={s.formControl}
                            onChange={e=>{
                                setVpnip(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN LOGIN</label>
                            <input type="text" placeholder={device[0]?.vpn_login} className={s.formControl}
                            onChange={e=>{
                                setVpnlogin(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">VPN PASS</label>
                            <input type="text" placeholder={device[0]?.vpn_pass} className={s.formControl}
                            onChange={e=>{
                                setVpnpass(e.target.value)
                        }}
                            ></input>
                    </div>
                    <div className={s.mb2}>
                            <label htmlFor="">CMTS IP</label>
                            <input type="text" placeholder={device[0]?.cmts_ip} className={s.formControl}
                            onChange={e=>{
                                setCmtsip(e.target.value)
                        }}
                            ></input>
                    </div>
                    <input type="submit"  onClick={handleSubmit} value="Обновить"/>
                </div>
            </div>
        </div>
    )
}
 

export default UpdateDevice;