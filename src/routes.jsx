import AdminPage from "./pages/adminPage/adminPage"
import Journal from "./pages/journalPage/journalPage"
import LoginPage from "./pages/login/loginPage"
import MasterPage from "./pages/masterpage/masterPage"

export const authRoutes = [
    {
        path:'/admin',
        Component: AdminPage
    },
    {
        path:'/journal',
        Component:Journal
    },
    {
        path:'/master',
        Component:MasterPage
    }
]

export const publicRoutes = [
    {
        path:'/',
        Component: LoginPage
    }
]