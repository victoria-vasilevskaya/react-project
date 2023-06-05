import React,{useEffect, useState}from "react";
import s from "../Module/Input.module.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";


function InputAbonent(){
    let {id} = useParams()
    const [abonent,setAbonent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [abonentPerPage] = useState(5);
    const [query,setQuery]=useState("");
    const keys=["surname","name","patronymic","id_address"]

    const Search = (data)=>{
        return data.filter(
            (item)=>
                keys.some(key=>item[key].toString().toLowerCase().includes(query.toLowerCase()))
        );
    };
    let mas = Search(abonent);
    
    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/abonent')
        .then(res=>setAbonent(res.data))
        .catch(err=>console.log(err)); 
    },[])

    const lastAbonentIndex = currentPage *abonentPerPage;
    const firstAbonentIndex = lastAbonentIndex - abonentPerPage;
    const currentAbonent = mas.slice(firstAbonentIndex,lastAbonentIndex);
    mas=currentAbonent;
    const pageNumber =[];
    for(let i=1;i <=Math.ceil(abonent.length / abonentPerPage);i++){
        pageNumber.push(i)
    }
    const paginate = pageNumber=>setCurrentPage(pageNumber);

    const handleDelete = async (ida)=>{
        id=ida;
        try{
            await Axios.delete("http://localhost:9000/admin-panel/abonent/"+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
            <div className={s.panelAbonent}>
                <Link to="/admin-panel/abonent/create" className={s.button}>Добавить</Link>
                <form>
                    <input type="text" placeholder="Искать здесь..."
                    onChange={(e)=>setQuery(e.target.value)}></input>
                </form>
                <table className={s.table}>
                    <thead>
                        <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Id_Адрес</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        mas.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.surname}</td>
                                <td>{data.name}</td>
                                <td>{data.patronymic}</td>
                                <td>{data.id_address}</td>
                                <td>
                                    <Link to={`/admin-panel/abonent/update/${data.id_abonent}`} className={s.buttontd}>Обновить</Link>
                                    <a onClick={e =>{
                                        handleDelete(data.id_abonent);
                                        alert("Абонент удален.");
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
                                    <a  className={s.active} onClick={()=>paginate(number)}>
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
 

export default InputAbonent;