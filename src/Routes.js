import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import MovieDetail from "./pages/MovieDetail";
import Populares from "./pages/Populares";
import Lancamentos from "./pages/Lancamentos";


export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Busca" element={<Busca />}></Route>
            <Route path="/Populares" element={<Populares />}></Route>
            <Route path="/Lancamentos" element={<Lancamentos />}></Route>

            <Route path="/Filme/:id" element={<MovieDetail />}></Route>
        </Routes>
    )
}