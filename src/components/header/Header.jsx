import React, { useContext } from 'react';
import logo from "./logo.svg"
import st from "./Header.module.css";
import NavMenu from "../NavMenu/navmenu";
import icon from "./btn.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




function Header() {
    const navigate =useNavigate();
    const handleLogout = (e) => { //функция выхода из аккаунта
        localStorage.clear()
        navigate("/");
    }
    return (
        <div className={st.Header}>
            <div className={st.logo}>
               <Link to="/abonent-device"> <a ><img src={logo} alt="logo"></img></a></Link>
            </div>
            <div className={st.textMenu}>
                Статистика
            </div>
            
            <div className={st.textUser}>{localStorage.getItem("role")+" "+localStorage.getItem("username")}</div>
             <button href="#" className={st.btn_logout} onClick={handleLogout}>
                <span>Выйти</span>
                <img src={icon}></img>
            </button>
            <div>
                <NavMenu />
            </div>
        </div>
    );
}

export default Header;