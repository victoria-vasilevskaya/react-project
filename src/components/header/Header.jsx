
import logo from "./logo.svg"
import st from "./Header.module.css";
import icon from "./btn.svg";
import { useNavigate } from 'react-router-dom';


const Header = () => {


    const history = useNavigate();

    const handleLogout = (e) => { //функция выхода из аккаунта
        localStorage.clear()
        e.preventDefault()
        history('/');
    }


    return (
        <div className={st.Header}>
            <div className={st.logo}>
                <a href="#"><img src={logo} alt="logo"></img></a>
            </div>
            <div className={st.textUser}>{localStorage.getItem("role")+" "+localStorage.getItem("username")}</div>
            <button href="#" className={st.btn_logout} onClick={handleLogout}>
                <span>Выйти</span>
                <img src={icon}></img>
            </button>
        </div>
    );
}


export default Header;