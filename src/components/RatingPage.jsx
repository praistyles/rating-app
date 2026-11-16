import './RatingPage.css'
import starIcon from './assets/icon-star.svg';

export function RatingPage() {
  return (
    <>
    <div className="rating-page">
        <div className='rate-icon'>
            <img src={starIcon} alt="icon-star" />
        </div>

        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="rating-buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
        <button className="submit-button">Submit</button>
    </div>
    </>
  );
}
