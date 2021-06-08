import React, { useState, useEffect } from 'react';
import '../Styles/QuoteBox.scss'
// import SocialButtons from '../components/SocialButtons'
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
    color= randomColor()
  },[displayQuote])

 
  document.body.style.backgroundColor = color;
  return (
    <div style={{ color }} className="containter" >
      <div id="quote-box">
        <p id="text">" {displayQuote} "</p>
        <p id='author'>- {author}</p>
        <div class="button">
          <a id='tweet-quote' style={{ background: color }}
            href={'twitter.com/intent/tweet'}
            target="_blank" title="Post this quote on twitter!">
            <i className="fab fa-twitter twitter-icon" />
          </a>
          <a style={{ background: color }} href={`"twitter.com/intent/tweet`} target="_blank" title="Post this quote on facebook!" >
            <i class="fab fa-facebook-f"></i>
          </a>
          <button style={{ background: color }} id="new-quote"
            onClick={handleChange}>New Quote</button>

        </div>
      </div>
    </div>

  );
}