import { Routes, Route } from 'react-router-dom'
import LoginPage  from './login/loginPage'
import JournalPage from './journal/journalPage'

export function Main(){
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/journal" element={<JournalPage />} />
            </Routes>
        </div>
    )
}