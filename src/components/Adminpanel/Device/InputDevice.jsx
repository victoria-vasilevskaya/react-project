import React,{useEffect, useState}from "react";
import s from "../Module/Input.module.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";


function InputDevice(){
    let {id} = useParams()
    const [device,setDevice] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [devicePerPage] = useState(5);
    const [query,setQuery]=useState("");
    const keys=["id_lan","id_abonent","cm_mac","cm_ip",
    "cpe_mac","cpe_ip","vpn_ip","vpn_login","vpn_pass","balance","cmts_ip"]

    const Search = (data)=>{
        return data.filter(
            (item)=>
                keys.some(key=>item[key].toString().toLowerCase().includes(query.toLowerCase()))
        );
    };
    let mas = Search(device);
    
    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/device')
        .then(res=>setDevice(res.data))
        .catch(err=>console.log(err)); 
    },[])

    const lastDeviceIndex = currentPage *devicePerPage;
    const firstDeviceIndex = lastDeviceIndex - devicePerPage;
    const currentDevice = mas.slice(firstDeviceIndex,lastDeviceIndex);
    mas=currentDevice;
    const pageNumber =[];
    for(let i=1;i <=Math.ceil(device.length / devicePerPage);i++){
        pageNumber.push(i)
    }
    const paginate = pageNumber=>setCurrentPage(pageNumber);

    const handleDelete = async (ida)=>{
        id=ida;
        try{
            await Axios.delete("http://localhost:9000/admin-panel/device/"+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
            <div className={s.panelDevice}>
                <Link to="/admin-panel/device/create" className={s.button}>Добавить</Link>
                <form>
                    <input type="text" placeholder="Искать здесь..."
                    onChange={(e)=>setQuery(e.target.value)}></input>
                </form>
                <div className={s.device}>
                <table className={s.table}>
                    <thead>
                        <tr>
                        <th>Id lan</th>
                        <th>Id абонента</th>
                        <th>CM MAC</th>
                        <th>CM IP</th>
                        <th>CPE MAC</th>
                        <th>CPE IP</th>
                        <th>VPN IP</th>
                        <th>VPN LOGIN</th>
                        <th>VPN PASS</th>
                        <th>CMTS IP</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        mas.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.id_lan}</td>
                                <td>{data.id_abonent}</td>
                                <td>{data.cm_mac}</td>
                                <td>{data.cm_ip}</td>
                                <td>{data.cpe_mac}</td>
                                <td>{data.cpe_ip}</td>
                                <td>{data.vpn_ip}</td>
                                <td>{data.vpn_login}</td>
                                <td>{data.vpn_pass}</td>
                                <td>{data.cmts_ip}</td>
                                <td>
                                    <Link to={`/admin-panel/device/update/${data.id_stat}`} className={s.buttontd}>Обновить</Link>
                                    <a onClick={e =>{
                                        handleDelete(data.id_stat);
                                        alert("Устройство удалено");
                                        }} className={s.buttontd}>Удалить</a>
                                </td>
                            </tr>
                        ))
                        }   
                        </tbody>
                    </table>
                    </div>
                    <div>
                        <ul className={s.pagination}>
                            {
                                pageNumber.map(number=>(
                                    <li className={s.pageItems} key={number}>
                                        <a  className={s.pagelink} onClick={()=>paginate(number)}>
                                            {number}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        
    )
}
 

export default InputDevice;