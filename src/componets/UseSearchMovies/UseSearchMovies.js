import { useState, useEffect } from 'react';

const useSearchMovies = (apiKey) => {
  const [buscar, setBuscar] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    if (buscar) {
      const apiKey = 'c9f04fa4';
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${buscar}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            setPeliculas(data.Search);
          } else {
            setPeliculas([]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [buscar, apiKey]);

  const manejarBusquedas = (e) => {
    e.preventDefault();
    setBuscar(e.target.buscar.value);
    e.target.buscar.value = '';
  };

  return {
    buscar,
    setBuscar,
    peliculas,
    manejarBusquedas
  };
};

export default useSearchMovies;
