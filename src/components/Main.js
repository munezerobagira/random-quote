import React from "react";

function Main({ quote, author, setRandomQuote, likeQuote }) {
  return (
    <main id="quote-box">
      <div id="wrapper">
        <div id="quote-wrapper">
          <blockquote
            id="text"
            onDoubleClick={(e) => {
              likeQuote(quote.id);
            }}
          >
            "{quote}"
          </blockquote>
          <p id="author">{author}</p>
        </div>
        <div id="button-group">
          <button id="new-quote" class="button" onClick={setRandomQuote}>
            Random
          </button>
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}#quotes `}
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
            class="button"
          >
            Tweet this quote
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
