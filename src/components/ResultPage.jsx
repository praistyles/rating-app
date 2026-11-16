import './ResultPage.css'
import thankYouIllustration from '../assets/illustration-thank-you.svg'

export function ResultPage({ rating }) {
  return (
    <section className="result-page" aria-live="polite">
      <img
        className="result-illustration"
        src={thankYouIllustration}
        alt=""
      />

      <p className="selection-tag">You selected {rating} out of 5</p>

      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more
        support, we&apos;ll be here for you.
      </p>
    </section>
  )
}
