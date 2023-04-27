import { Routes, Route } from 'react-router-dom'
import { getFormValue } from './pages/login/login'
import Login  from './pages/login/login'
import Journal from './pages/journal/journal'

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