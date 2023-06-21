import React from "react";
import s from "./Module/AdminPanel.module.css";
import logo from "./logo.svg";
import icon from './btn.svg';
import { Route, Routes,Link } from "react-router-dom";
import InputAbonent from "./Abonent/InputAbonent";
import InputUser from "./User/InputUser";
import CreateAbonent from './Abonent/CreateAbonent';
import CreateUser from './User/CreateUser';
import UpdateAbonent from './Abonent/UpdateAbonent';
import UpdateUser from './User/UpdateUser';
import InputAddress from "./Address/InputAddress";
import CreateAddress from "./Address/CreateAddress";
import UpdateAddress from "./Address/UpdateAddress";
import InputDevice from "./Device/InputDevice";
import CreateDevice from "./Device/CreateDevice";
import UpdateDevice from "./Device/UpdateDevice";
import InputTSandSZSPK from "./TSandSZSPK/InputTSandSZSPK";
import CreateTSandSZSPK from "./TSandSZSPK/CreateTSandSZSPK";
import UpdateTSandSZSPK from "./TSandSZSPK/UpdateTSandSZSPK";

function AdminPanel() {

    return (
        <div className={s.adminPanel}>
            <div className={s.logo}>
                <img src={logo} alt="лого" ></img></div>
            <div className={s.authform}></div>
            <div className={s.exit}>
            <Link to="/">  <button href="#" className={s.btn_logout}>
                <span>Выйти</span>
                <img src={icon}></img>
            </button></Link>
            </div>
            <div className={s.navBar}>
                <Link to="/admin-panel/user" className={s.link}>Пользователи</Link>
                <Link to="/admin-panel/abonent" className={s.link}>Абоненты</Link>
                <Link to="/admin-panel/address" className={s.link}>Адреса</Link>
                <Link to="/admin-panel/device" className={s.link}>Абонентские устройства</Link>
                <Link to="/admin-panel/ts-szspk" className={s.link}>ТСиЖСПК</Link>
            </div>

            <div className={s.panelTable}>
                <React.Fragment>
                    <Routes>
                        <Route path='abonent' element={<InputAbonent />} />
                        <Route path='abonent/create' element={<CreateAbonent />} />
                        <Route path='abonent/update/:id' element={<UpdateAbonent />} />
                        <Route path='user' element={<InputUser />} />
                        <Route path='user/create' element={<CreateUser />} />
                        <Route path='user/update/:id' element={<UpdateUser />} />
                        <Route path='address' element={<InputAddress />} />
                        <Route path='address/create' element={<CreateAddress />} />
                        <Route path='address/update/:id' element={<UpdateAddress />} />
                        <Route path='device' element={<InputDevice />} />
                    <Route path='device/create' element={<CreateDevice/>} />
                    <Route path='device/update/:id' element={<UpdateDevice/>} />
                    <Route path='ts-szspk' element={<InputTSandSZSPK/>} />
                    <Route path='ts-szspk/create' element={<CreateTSandSZSPK/>} />
                    <Route path='ts-szspk/update/:id' element={<UpdateTSandSZSPK/>} />
                    </Routes>
                    </React.Fragment>
                </div>
            
        </div>
    )
}


export default AdminPanel;