import './inputSearch.css';

function InputSearch() {
    return(
        <div className='inputSearch'>
            <div className='a'>
                <div>
                    <h1>Bem-Vindo(a).</h1>
                    <h1>Milhões de Filmes para descobrir. Explore já!</h1>
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='Busque por um Filme...'/>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default InputSearch