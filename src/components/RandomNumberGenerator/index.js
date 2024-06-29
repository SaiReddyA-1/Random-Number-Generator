import React, {useState} from 'react'
import './index.css'

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0)

  const generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    setNumber(randomNumber)
  }

  return (
    <div className="random-number-generator">
      <h1 className="heading">Random Number Generator</h1>
      <p className="instruction">
        Generate a random number in the range of 0 to 100
      </p>
      <p className="number-display">{number}</p>
      <button className="generate-button" onClick={generateRandomNumber}>
        Generate
      </button>
    </div>
  )
}

export default RandomNumberGenerator
