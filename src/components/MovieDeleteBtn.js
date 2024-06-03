import "./MovieDeleteBtn.css"

const MovieDeleteBtn = (props) => {
  return (
    <button className="movie-delete-btn" onClick={props.deleteMovie}>Vymazat Film</button>
  )
}

export default MovieDeleteBtn