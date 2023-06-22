import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/login/loginPage'
import Journal from '../pages/journalPage/journalPage'
import MasterPage from '../pages/masterpage/masterPage'
import AdminPage from '../pages/adminPage/adminPage'


const AppRouter = () =>{
    return( 
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/master" element={<MasterPage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    )
}

export default AppRouter;