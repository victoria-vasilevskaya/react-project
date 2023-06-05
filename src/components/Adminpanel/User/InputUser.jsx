import React,{useEffect, useState}from "react";
import s from "../Module/Input.module.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";




function InputUser(){
    let {id} = useParams()
    const [user,setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [userPerPage] = useState(5);
    const [query,setQuery]=useState("");
    let keys=["name","login","password","phone_number","post"]
    
    const Search = (data)=>{
        return data.filter(
            (item)=>
                keys.some(key=> item[key].toString().toLowerCase().includes(query.toLowerCase()))
        );
    };
    let mas = Search(user);
    
    useEffect(()=>{
        Axios.get('http://localhost:9000/admin-panel/user')
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err)); 
    },[])
    const lastUserIndex = currentPage *userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUser = mas.slice(firstUserIndex,lastUserIndex);
    mas=currentUser;
    const pageNumber =[];
    for(let i=1;i <=Math.ceil(user.length / userPerPage);i++){
        pageNumber.push(i)
    }
    const paginate = pageNumber=>setCurrentPage(pageNumber);

    const handleDelete = async (ida)=>{
        id=ida;
        try{
            await Axios.delete("http://localhost:9000/admin-panel/user/"+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
            <div className={s.panelUser}>
                <Link to="/admin-panel/user/create" className={s.button}>Добавить</Link>
                <form>
                    <input type="text" placeholder="Искать здесь..."
                    onChange={(e)=>setQuery(e.target.value)}></input>
                </form>
                <table className={s.table}>
                    <thead>
                        <tr>
                        <th>ФИО</th>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Телефон</th>
                        <th>Должность</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        mas.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.login}</td>
                                <td>{data.password}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.post}</td>
                                <td>
                                    <Link to={`/admin-panel/user/update/${data.id_user}`} className={s.buttontd}>Обновить</Link>
                                    <a onClick={e =>{
                                        handleDelete(data.id_user);
                                        alert("Пользователь удален");
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
 

export default InputUser;