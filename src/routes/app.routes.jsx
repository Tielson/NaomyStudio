import { Route, Routes } from "react-router-dom";


import { Complete } from '../pages/Complete'

export function AppRoutes() {

    return (
        <Routes>

            <Route path="/" element={<Complete/>} />

        </Routes>
    )
}