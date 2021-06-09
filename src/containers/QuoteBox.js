import React, { useState, useEffect } from 'react';
import '../Styles/QuoteBox.scss'
import Buttons from '../components/Buttons'
import randomColor from 'randomcolor'

var color = randomColor({
    luminosity: 'dark',
 });


export default function QuoteBox() {

  const [quotes, setQuotes] = useState([]);
  const [displayQuote, setdisplayQuote] = useState('');
  const [author, setAuthor] = useState('');


  function handleChange() {
    const quotePicker = Math.floor(Math.random() * (quotes.length));
    setdisplayQuote(quotes[quotePicker].quote)
    setAuthor(quotes[quotePicker].author)
    
  }

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(response => {
        const fetchedQuotes = response.quotes
        const quotePicker = Math.floor(Math.random() * 100);
        setQuotes(fetchedQuotes)
        setdisplayQuote(fetchedQuotes[quotePicker].quote)
        setAuthor(fetchedQuotes[quotePicker].author)

      })

  }, [])

  useEffect(()=>{
    color= randomColor({
      luminosity: 'dark',
   })
  },[author])

 
  document.body.style.backgroundColor = color;
  return (
    <div style={{ color }} className="containter" >
      <div id="quote-box">
        
        <p id="text"><i class="fa fa-quote-left"> </i>{displayQuote} </p>
        <p id='author'>— {author}</p>
        <Buttons 
          color={color} 
          handleChange={handleChange}
          quote={displayQuote}
          author={author}
        />
      </div>
    </div>

  );
}