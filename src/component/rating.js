import React from 'react'
import { Star, StarHalf, StarFill } from 'react-bootstrap-icons';

const Rating = ({value}) => {
  const numOfStarFill = (num) => {
    return Math.floor(num/2)
  }

  const numOfStarHalf = (num) => {
    const filledStars = numOfStarFill(num)
    return (num - filledStars) === 0 ? 0 : 1
  }
  const numOfStarEmpty = (num) => {
    const filledStars = numOfStarFill(num)
    const halfStars = numOfStarHalf(num)
    return 5 - filledStars - halfStars
  }

  const STAR_SHAPED_MAPPING = {
    'StarFill': <StarFill/>,
    'StarHalf': <StarHalf/>,
    'StarEmpty': <Star/>
  }

  function StarRating({val, type}) {
    return(
      <>
        {
          Array.from({ length: val }, (_, k) => (
            STAR_SHAPED_MAPPING[type]
          ))
        }
      </>
    )
  }

  return (
    <>
      <StarRating val={numOfStarFill(value)} type='StarFill'/>
      <StarRating val={numOfStarHalf(value)} type='StarHalf'/>
      <StarRating val={numOfStarEmpty(value)} type='StarEmpty'/>
    </>
  )
}

export default Rating;