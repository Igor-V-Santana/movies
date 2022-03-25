import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useText } from "../../components/context/Text";
import './busca.css'

function Busca() {

    const {text, setText} = useText();
    const [teste, setTeste] = useState([])

    async function getMovieSearch() {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&query=${text}&page=1&include_adult=false`);
        setTeste(response.data.results)
    }

    useEffect(() => {
        getMovieSearch()
    }, [text])

    function handleKeyPress(event){
        if(event.key === 'Enter'){
            setText(event.target.value)
        }
    }

    return(
        <>  
            <div className="input">
                <input type="text" placeholder="Buscar por um filme" onKeyPress={handleKeyPress} />
            </div>
            <hr></hr>
            {text === '' || teste.length === 0
            ? 
            <div className="busca">Não foram encontrados filmes com esse nome!</div> 
            : 
            <div className="busca">
                {teste.filter(m => m.poster_path != null).map(movie => <Card movie={movie}/>)}
            </div>}
        </>
    )
}

export default Busca