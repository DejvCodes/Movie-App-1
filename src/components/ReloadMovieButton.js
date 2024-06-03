import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
  return (
    <button className="reload-movies-btn" onClick={props.reloadAllMovies}>Načíst Filmy</button>
  )
}

export default ReloadMovieButton