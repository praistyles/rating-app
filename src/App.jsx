import { useState } from 'react'
import './App.css'
import { RatingPage } from './components/RatingPage.jsx'
import { ResultPage } from './components/ResultPage.jsx'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setSubmitted(true)
    }
  }

  return (
    <main className="app-shell">
      {submitted ? (
        <ResultPage rating={selectedRating} />
      ) : (
        <RatingPage
          selectedRating={selectedRating}
          onSelect={setSelectedRating}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  )
}

export default App
