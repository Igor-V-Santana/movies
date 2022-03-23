import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Busca from "./pages/Busca";


export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Busca" element={<Busca />}></Route>
        </Routes>
    )
}