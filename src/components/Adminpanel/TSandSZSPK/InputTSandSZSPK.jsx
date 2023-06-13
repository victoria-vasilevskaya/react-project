import React,{useEffect, useState}from "react";
import s from "../Module/Input.module.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert2';

function InputTSandSZSPK(){
    let {id} = useParams()
    const [tsandszspk,setTSandSZSPK] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [tsandszspkPerPage] = useState(5);
    const [query,setQuery]=useState("");
    const keys=["street","house","fio","phone_number",
    "name_ts","compl_date","compens"]

    const Search = (data)=>{
        return data.filter(
            (item)=>
                keys.some(key=>item[key].toString().toLowerCase().includes(query.toLowerCase()))
        );
    };
    let mas = Search(tsandszspk);
    
    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/ts-szspk')
        .then(res=>setTSandSZSPK(res.data))
        .catch(err=>console.log(err)); 
    },[])
    const lasttsandszspkIndex = currentPage *tsandszspkPerPage;
    const firsttsandszspkIndex = lasttsandszspkIndex - tsandszspkPerPage;
    const currenttsandszspk = mas.slice(firsttsandszspkIndex,lasttsandszspkIndex);
    mas=currenttsandszspk;
    const pageNumber =[];
    for(let i=1;i <=Math.ceil(tsandszspk.length / tsandszspkPerPage);i++){
        pageNumber.push(i)
    }
    const paginate = pageNumber=>setCurrentPage(pageNumber);

    const handleDelete = async (ida)=>{
        id=ida;
        try{
            swal.fire({
                title: 'Вы точно хотите удалить?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Удалить',
                denyButtonText: `Не удалять`,
                cancelButtonText:'Отмена',
              }).then((result) => {
                if (result.value) {
                    Axios.delete("http://localhost:9000/admin-panel/ts-szspk/"+id)
                    window.location.reload()
                  swal.fire('Удалено', '', 'success')
                } else if (!result.value) {
                  swal.fire('Удаление отменено', '', 'info')
                }
              });
            
        }catch(err){
            console.log(err);
        }
    }
    return(
            <div className={s.panelAddress}>
                <Link to="/admin-panel/ts-szspk/create" className={s.button}>Добавить</Link>
                <form>
                    <input type="text" placeholder="Искать здесь..."
                    onChange={(e)=>setQuery(e.target.value)}></input>
                </form>
                <table className={s.table}>
                    <thead>
                        <tr>
                        <th>Улица</th>
                        <th>Дом</th>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Название ТС</th>
                        <th>Дата заключения</th>
                        <th>Compens</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        mas.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.street}</td>
                                <td>{data.house}</td>
                                <td>{data.fio}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.name_ts}</td>
                                <td>{data.compl_date}</td>
                                <td>{data.compens}</td>
                                <td>
                                    <Link to={`/admin-panel/ts-szspk/update/${data.id}`} className={s.buttontd}>Обновить</Link>
                                    <a onClick={e =>{
                                        handleDelete(data.id);
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
 

export default InputTSandSZSPK;