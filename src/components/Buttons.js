import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";


export default function Buttons(props) {
    var color = props.color
    var shareText = `${props.quote} -${props.author} `

    return (
        <div class="button">
            
            <TwitterShareButton url="https://github.com/" title={shareText} via="Sugam_" hashtags={["RandomQuoteGenerator","React"]}>
            <a id='tweet-quote' style={{ background: color }}
                title="Post this quote on twitter!">
                <i className="fab fa-twitter twitter-icon" />
            </a>
            </TwitterShareButton>


            <FacebookShareButton url="https://github.com/" quote={shareText}  hashtag="#RandomQuoteGenerator" >
                <a style={{ background: color }} title="Post this quote on facebook!" >
                    <i class="fab fa-facebook-f"></i>
                </a>
            </FacebookShareButton>
            <button style={{ background: color }} id="new-quote"
                onClick={props.handleChange}>New Quote</button>

        </div>
    )
}