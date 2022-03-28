import { Link, NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header>
                <h1>Filmes</h1>
                <nav>
                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/Populares" className="navlink">Populares</NavLink>
                    <NavLink to="/Lancamentos" className="navlink">Lancamentos</NavLink>
                </nav>
        </header>
    )
}

export default Header