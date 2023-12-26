import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  const setting = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="container">
      <h1>Action Movies</h1>
      <Slider {...setting}>
        {actionMovies.map(each => (
          <MovieItem actionDetails={each} key={each.id} />
        ))}
      </Slider>
      <h1>Comedy Movies</h1>
    </div>
  )
}

export default MoviesSlider
