import './miniCard.css';

function MiniCard({movie}){

    const date = new Date(movie.release_date).toLocaleDateString('pt-br');
    
    return(
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
            <p className='movieTitle'>{movie.title}</p>
            <p className='movieDate'>{date}</p>
        </div>
    )
}

export default MiniCard