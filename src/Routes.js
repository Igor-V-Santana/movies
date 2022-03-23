import { Route, Routes } from "react-router-dom";
import Lancamentos from "./pages/Lancamentos";
import Populares from "./pages/Populares";
import Busca from "./pages/Busca";
import MovieDetail from "./pages/MovieDetail";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Populares />}></Route>
            <Route path="/Populares" element={<Populares />}></Route>
            <Route path="/Lancamentos" element={<Lancamentos />}></Route>
            <Route path="/Busca" element={<Busca />}></Route>
            <Route path="/:id" element={<MovieDetail />}></Route>
        </Routes>
    )
}