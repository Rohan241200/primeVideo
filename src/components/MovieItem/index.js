import './index.css'

const MovieItem = props => {
  const {actionDetails} = props
  const {thumbnailUrl} = actionDetails

  return (
    <div className="movies-container">
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
    </div>
  )
}

export default MovieItem
