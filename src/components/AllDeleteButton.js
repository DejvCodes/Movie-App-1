import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
  return (
    <button className="all-delete-btn" onClick={props.deleteAllMovies}>Vymazat Vše</button>
  )
}

export default AllDeleteButton