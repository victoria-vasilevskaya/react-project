import { Routes, Route } from 'react-router-dom'
import { getFormValue } from './login/login'
import Login  from './login/login'
import Journal from './journal/journal'

export function Main(){
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/journal" element={<Journal />} />
            </Routes>
        </div>
    )
}