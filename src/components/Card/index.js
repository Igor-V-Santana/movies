import './card.css';
import { Link } from 'react-router-dom';

function Card({movie}){

    const date = new Date(movie.release_date).toLocaleDateString('pt-br');

    return(
        <Link to={`/Filme/${movie.id}`} className="cardSearch">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
            <div className='cardSearchInfo'>
                <div>
                    <p className='title'>{movie.title}</p>
                    <p className='date'>{date}</p>
                </div>
                <div className='overview'>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;