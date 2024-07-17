import UseSearchMovies from '../UseSearchMovies/UseSearchMovies'
import './Resultados.css'

const Resultados = () => {
    const apiKey = 'c9f04fa4';
    const { peliculas } = UseSearchMovies(apiKey);
  
    return (
        <ul>
        {
            peliculas === undefined ? <h2> La película no esta disponible. Intente en Cuevana</h2> : peliculas.map(peli => {
                return (
                    <li key={peli.imdbID}> <img src={peli.Poster} alt={peli.Title} /> {peli.Title} </li>
                )
            })
        }
    </ul>
  )
}

export default Resultados