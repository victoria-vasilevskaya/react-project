import React from "react";
import logo from "./logo.svg"
import st from "./Header.module.css";
import NavMenu from "../NavMenu/navmenu";
import icon from "./btn.svg";

function Header() {
    return (
        <div className={st.Header}>
            <div className={st.logo}>
                <a href="#"><img src={logo} alt="logo"></img></a>
            </div>
            <div className={st.textMenu}>
                Журнал заявок
            </div>
            <div className={st.textUser}>Менеджер Иванов О.</div>
            <button href="#" className={st.btn_logout}>
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