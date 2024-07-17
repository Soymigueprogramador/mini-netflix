import UseSearchMovies from '../UseSearchMovies/UseSearchMovies.js'

const Button = () => {
  const apiKey = 'c9f04fa4';
  const { manejarBusquedas } = UseSearchMovies(apiKey);
  
  return (
    <div>
      <button onClick={manejarBusquedas}> Buscar </button>
    </div>
  )
}

export default Button