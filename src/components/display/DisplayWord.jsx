import React from 'react'
import "./DisplayWord.css"
import like from "../assets/thumbs-up.png"
import dislike from "../assets/thumbs-down.png"
const DisplayWord = (props) => {
    const {word, meaning, phonetic, partsOfSpeech, example} = props.word
  return (
    <div className='card'>
        <p id='heading'>Definition of '{word}'</p>
        <p id='word'>{word}</p>
        <p id='phonetic'>/'{phonetic}'/</p>
        <p id='parts-of-speech'>{partsOfSpeech}</p>
        <p id='meaning'>1. {meaning}:</p>
        <p id='example'>"{example}"</p>
        
    </div>
  )
}

export default DisplayWord