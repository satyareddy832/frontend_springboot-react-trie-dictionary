import React, { useState } from 'react'
import "./StartsWith.css"

function getCharArray(){
    const a = new Array()
    for(let i = 0; i <= 25; i++){
        a.push(String.fromCharCode(97 + i));
    }
    return a;
}

const StartsWith = () => {
    const [words, setWords] = useState([])
    const a = getCharArray();
    const handleClick =async(e)=>{
        await fetch(`http://localhost:9999/api/startsWith/${e.target.value}`).then((res)=> res.json()).then((data)=> setWords(data))
        
        console.log(words);
    }
  return (
    <div className='container'>
        <p>Browse the English Dictionary</p>
        <div className='char-container'>
            {a.map((char, index)=>{
                return <button className='char-btn' key={index} value={char} onClick={handleClick}>{char}</button>
            })}
        </div>
    </div>
  )
}

export default StartsWith