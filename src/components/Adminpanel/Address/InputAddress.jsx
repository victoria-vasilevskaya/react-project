import React,{useEffect, useState}from "react";
import s from "../Module/Input.module.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";


function InputAddress(){
    let {id} = useParams()
    const [address,setAddress] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [addresPerPage] = useState(5);
    const [query,setQuery]=useState("");

    let keys=["street","house","flat"]
    
    const Search = (data)=>{
        return data.filter(
            (item)=>
                keys.some(key=> item[key].toString().toLowerCase().includes(query.toLowerCase()))
        );
    };
    let mas = Search(address);
    
   useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/address')
        .then(res=>{
            setAddress(res.data);
        })
        .catch(err=>console.log(err)); 
    },[])

    const lastAddressIndex = currentPage *addresPerPage;
    const firstAddressIndex = lastAddressIndex - addresPerPage;
    const currentAddress = mas.slice(firstAddressIndex,lastAddressIndex);
    mas=currentAddress;
    const pageNumber =[];
    for(let i=1;i <=Math.ceil(address.length / addresPerPage);i++){
        pageNumber.push(i)
    }
    const paginate = pageNumber=>setCurrentPage(pageNumber);
    const handleDelete = async (ida)=>{
        id=ida;
        try{
            await Axios.delete("http://localhost:9000/admin-panel/address/"+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
            <div className={s.panelAddress}>
                <Link to="/admin-panel/address/create" className={s.button}>Добавить</Link>
                <form>
                    <input type="text" placeholder="Искать здесь..."
                    onChange={(e)=>setQuery(e.target.value)}></input>
                </form>
                <table className={s.table}>
                    <thead>
                        <tr>
                        <th>Улица</th>
                        <th>Дом</th>
                        <th>Квартира</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        mas.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.street}</td>
                                <td>{data.house}</td>
                                <td>{data.flat}</td>
                                <td>
                                    <Link to={`/admin-panel/address/update/${data.id_address}`} className={s.buttontd}>Обновить</Link>
                                    <a onClick={e =>{
                                        handleDelete(data.id_address);
                                        alert("Адрес удален.");
                                        }} className={s.buttontd}>Удалить</a>
                                </td>
                            </tr>
                        ))
                        }   
                    </tbody>
                </table>
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
 

export default InputAddress;