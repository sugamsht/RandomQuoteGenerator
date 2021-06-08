import React,{useState,useEffect} from 'react';
import '../Styles/QuoteBox.scss'
import SocialButtons from '../components/SocialButtons'
import randomColor from 'randomcolor'

var color = randomColor({
    luminosity: 'dark',
 });
 class QuoteBox extends React.Component {
     
     constructor(props) {
         super(props);
         this.state = {
             quotes: [] ,
             displayQuote : '',
             author: ''
           };
           this.handleChange = this.handleChange.bind(this)
     }
   
 
     
     handleChange(){
         const quotePicker = Math.floor(Math.random()*this.state.quotes.length);
         this.setState(state => ({
             displayQuote : this.state.quotes[quotePicker].quote,
             author: this.state.quotes[quotePicker].author
           }))
     }

     componentDidMount(){
         fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
         
            .then(response => response.json())
            .then(response =>{
                const fetchedQuotes = response.quotes
                const quotePicker = Math.floor(Math.random()*100);
             this.setState({
                  quotes: fetchedQuotes,
                  displayQuote : fetchedQuotes[quotePicker].quote,
                  author: fetchedQuotes[quotePicker].author
             })
               
            })
    }
 
       render(){
     document.body.style.backgroundColor = color;
         console.log(this.state.displayQuote,this.state.author)
     return (
       <div style={{ color }} className="containter" >
         <div id="quote-box">
           <p id="text">" {this.state.displayQuote} "</p>
           <p id='author'>- {this.state.author}</p>
           <div class="button">
             <a id='tweet-quote' style={{background: color}} 
               href={'twitter.com/intent/tweet'} 
               target="_blank" title="Post this quote on twitter!"                      >
               <i className="fab fa-twitter twitter-icon"  />
             </a>
             <a style={{background: color}} href={`"twitter.com/intent/tweet`} target="_blank" title="Post this quote on facebook!"                      >
               <i class="fab fa-facebook-f"></i>
             </a>
             <button style={{background: color}} id="new-quote"
               onClick={this.handleChange}>New Quote</button>
 
           </div>
         </div>
       </div>
 
     );
   }
 }
   
  export default QuoteBox;