import "./Movie.css"
import data from "../data"
import MovieDeleteBtn from "./MovieDeleteBtn"
import AllDeleteButton from "./AllDeleteButton"
import ReloadMovieButton from "./ReloadMovieButton"
import { useState } from "react"

const Movie = () => {
  const [movieList, setMovieList] = useState(data)

  // Mazání jednotlivých filmů
  const deleteMovie = (id) => {
    // Filtrování seznamu filmů, aby se odstranil film s daným ID
    const filteredMovies = movieList.filter((oneMovie) => {
      // Porovnání ID jednotlivých filmů s ID, které má být smazáno
      return oneMovie.id !== id
    })
    // Aktualizace stavu movieList s novým seznamem filmů
    setMovieList(filteredMovies)
  }

  // Vymazání všech filmů
  const deleteAllMovies = () => {
    setMovieList([])
  }

  // Vrácení všech filmů
  const reloadAllMovies = () => {
    setMovieList(data)
  }

  return <section>
    <div className="all-movies">
      {
        movieList.map((oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return <div className="one-movie" key={id}>
            <img src={image} alt="img" />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
            <MovieDeleteBtn deleteMovie={() => deleteMovie(id)} />
          </div>
        })
      }
    </div>

    <div className="button-box">
      <AllDeleteButton deleteAllMovies={deleteAllMovies} />
      <ReloadMovieButton reloadAllMovies={reloadAllMovies} />
    </div>
  </section>
}

export default Movie