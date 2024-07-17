import './Input.css'
import useSearchMovies from '../UseSearchMovies/UseSearchMovies';

const MovieSearchForm = ({ apiKey }) => {
  const { buscar, manejarBusquedas, peliculas } = useSearchMovies(apiKey);

  return (
    <div>
      <form onSubmit={manejarBusquedas}>
        <input type="text" name="buscar" placeholder="Buscar películas..." />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {peliculas.length > 0 ? (
          peliculas.map((pelicula, index) => (
            <div key={index}>
              <h2>{pelicula.Title}</h2>
              <p>{pelicula.Year}</p>
              <img src={pelicula.Poster} alt={pelicula.Title} />
            </div>
          ))
        ) : (
          <p>No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearchForm;
