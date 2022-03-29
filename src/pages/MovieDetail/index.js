import './movieDetail.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillStarFill } from 'react-icons/bs';
import TrailerBtn from '../../components/TrailerBtn';

    function MovieDetail() {

        const location = useLocation();
        const urlId = location.pathname.replace("/Filme/", "");
    
        const [movie, setMovie] = useState([]);
        const [actors, setActors] = useState([]);
        const [crew, setCrew] = useState([]);
        const [modal, setModal] = useState(false);
        const [trailer, setTrailer] = useState([])
    
        async function getMovieDetail() {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${urlId}?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR`);
                const details = await axios.get(`https://api.themoviedb.org/3/movie/${urlId}/credits?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=en-US`);
                const videos = await axios.get(`https://api.themoviedb.org/3/movie/${urlId}/videos?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=en-US`);
                setMovie(response.data);
                setActors(details.data.cast);
                setCrew(details.data.crew);
                setTrailer(videos.data.results)
                console.log(videos.data.results);
            } catch(err) {
                console.log(err);
            }
        }
    
        useEffect(() => {
            getMovieDetail();
        }, []);

        function modalOn(){
            setModal(true)
        }

        return(
        <div className='movieDetail'>
            <div className={modal ? 'modal-bg' : 'modal-of'}>
                <div className='modal'>
                    <div><button onClick={() => setModal(false)}>X</button></div>
                    <div className='trailers'>{trailer.filter(trailer => trailer.official === true && trailer.type === 'Trailer').map(trailerOfficial => (
                        <iframe width="700" height="400" src={`https://www.youtube.com/embed/${trailerOfficial.key}`}></iframe>
                    ))}</div>
                </div>
            </div>
            <div className="hero">
                <div className="bg"
                style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}
                >
                </div>
                <div className="posterPath">
                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} alt="Poster" />
                </div>
                <div className="serieInfo">
                    <h1>{movie.title}</h1>
                    <ul className="genres">
                        {movie.genres?.map(genre => (
                            <li key={genre.id}>
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                    <div className="score"><BsFillStarFill color="#ffff00"/><span>{movie.vote_average}</span></div>
                    <p className="serieInfoOverview">{movie.overview}</p>
                    <div className='crew'>
                        <ul>
                            {crew.filter(c => c.job === 'Director').map(crewFiltered => (
                                <li>
                                    {crewFiltered.name}
                                    <p>Diretor</p>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {crew.filter(c => c.job === 'Novel').map(crewFiltered => (
                                <li>
                                    {crewFiltered.name}
                                    <p>Escritor</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TrailerBtn modalOn={modalOn}/>
                </div>
            </div>
            <div className='teste'>
                <h2>Elenco:</h2>
                <ul>
                    {actors.filter(person => person.profile_path !== null).map(actor => (
                    <li key={actor.id}>
                        <img src={`https://www.themoviedb.org/t/p/original/${actor.profile_path}`} />
                        <p className='actor'>{actor.name}</p>
                        <p className='character'>{actor.character}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MovieDetail