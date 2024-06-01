import React, { useEffect, useState } from 'react'
import "./Search.css"
import search from "../assets/search.png"
import DisplayWord from '../display/DisplayWord'
const Search = () => {
    const [phrase, setPhrase] = useState('')
    const [words, setWords] = useState([])
    const [word, setWord] = useState({
        word : "",
        meaning : "",
        phonetic : "",
        partsOfSpeech : "",
        example : ""
    })
    function handleChange(e){
        document.querySelector(".starts-with").style.display = 'block'
        setPhrase(e.target.value)
    }

    const getWord = async () =>{
        setWords([])
        await fetch(`http://localhost:9999/api/meaning/${phrase}`).then((res)=> res.json()).then((data)=> setWord({...data}))
    }
    useEffect(()=>{
        const fetchWords = async()=>{
            fetch(`http://localhost:9999/api/startsWith/${phrase}`).then((res)=> res.json()).then((data)=> setWords(data))
        }
        if(phrase.length !== 0)
            fetchWords();
        else
            setWords([])
    }, [phrase])
  return (
    <div className='search'>
        <div className='filter'><input placeholder="ENTER WORD" value={phrase} onChange={handleChange}/><button id="btn" onClick={getWord}>search</button></div>
        <div className='starts-with'>
        {words.length !== 0 && 
            
            words.map((word, index)=>{
                return(
                    <div key={index} className='word' onClick={()=> {setPhrase(word); document.querySelector('.starts-with').style.display = 'none'}}>
                        <img  src={search} alt=''/>
                        <p>{word}</p>
                    </div>
                )
            })
            
        }
        </div>
        {word.word.length !== 0 && 
            <DisplayWord word={word}/>
        }
    </div>
  )
}

export default Search