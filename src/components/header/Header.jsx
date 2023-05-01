import React from "react";
import s from "./Header.module.css";
import logo from "./logo.svg"
import exit from "./exit.svg";


function Header() {
    return (
        <div className={s.Header}>
            <div className={s.logo}>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={s.headerMenu}>
                <div className={s.textMenu}>Журнал заявок</div>
                <div className={s.textUser}>Менеджер Иванов О.</div>
            </div>
            <img src={exit} alt=""></img>
            <div className={s.burgerMenu}>
                Menu
            </div>
        </div>
    );
}

export default Header;