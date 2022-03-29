import { FaPlay } from 'react-icons/fa';
import './trailerBtn.css';

function TrailerBtn( {modalOn} ) {
    return(
        <button onClick={modalOn}><FaPlay color="green"/>Trailer</button>
    )
}

export default TrailerBtn