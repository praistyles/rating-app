import './RatingPage.css'
import starIcon from '../assets/icon-star.svg'

export function RatingPage({ selectedRating, onSelect, onSubmit }) {
  const ratings = [1, 2, 3, 4, 5]

  return (
    <section className="rating-page" aria-label="Rating form">
      <div className="rate-icon" aria-hidden="true">
        <img src={starIcon} alt="" />
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-buttons" role="group" aria-label="Choose a rating">
        {ratings.map((rating) => (
          <button
            key={rating}
            type="button"
            className={selectedRating === rating ? 'active' : ''}
            onClick={() => onSelect(rating)}
            aria-pressed={selectedRating === rating}
            aria-label={`${rating} out of 5`}
          >
            {rating}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="submit-button"
        onClick={onSubmit}
        disabled={selectedRating === null}
      >
        Submit
      </button>
    </section>
  )
}
