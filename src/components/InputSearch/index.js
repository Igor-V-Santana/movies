import { useText } from '../context/Text';
import { Link, useNavigate } from 'react-router-dom';
import './inputSearch.css';

function InputSearch() {

    const {text, setText} = useText();
    const navigate = useNavigate()

    function handleChange(event){
        if(event.key === 'Enter'){
            setText(event.target.value)
            navigate("/Busca")
        }
    }

    return(
        <div className='inputSearch'>
            <div className='a'>
                <div>
                    <h1>Bem-Vindo(a).</h1>
                    <h1>Milhões de Filmes para descobrir. Explore já!</h1>
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='Busque por um Filme...' onChange={(e) => setText(e.target.value)} onKeyPress={handleChange}/>
                    <Link className='btnSearchj' to="/Busca">Search</Link>
                </div>
            </div>
        </div>
    )
}

export default InputSearch