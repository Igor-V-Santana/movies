import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header>
            <h1>Filmes</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Populares</Link>
                <Link to="/">Lançamentos</Link>
            </nav>
        </header>
    )
}

export default Header