import logo from "./logo.svg"
import st from "./Header.module.css";
import NavMenu from "../NavMenu/navmenu";
import icon from "./btn.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={st.Header}>
            <div className={st.logo}>
               <Link to="/abonent-device"> <a ><img src={logo} alt="logo"></img></a></Link>
            </div>
            <div className={st.textMenu}>
                Статистика
            </div>
            
            <div className={st.textUser}>Менеджер Иванов О.</div>
            <Link to="/">  <button href="#" className={st.btn_logout}>
                <span>Выйти</span>
                <img src={icon}></img>
            </button></Link>
            <div>
                <NavMenu />
            </div>
        </div>
    );
}

export default Header;