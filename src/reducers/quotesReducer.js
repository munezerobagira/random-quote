export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const SET_QUOTES = "SET_QUOTES";
export const ADD_QUOTES = "ADD_QUOTES";
export const ADD_QUOTE = "ADD_QUOTE";
export const SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE";
export const setQuotes = (quotes) => ({ type: SET_QUOTES, quotes });
export const addQuotes = (quotes) => ({ type: ADD_QUOTE, quotes });
export const addQuote = (quote) => ({ type: ADD_QUOTE, quote });
export const setRandomQuote = () => ({ type: SET_RANDOM_QUOTE });
export const toggleLike = (quoteId) => ({ type: SET_RANDOM_QUOTE, quoteId });

export default function quotesReducer(state, action) {
  switch (action.type) {
    case SET_QUOTES:
      window.localStorage.setItem("quotes", JSON.stringify(action.quotes));
      return Object.assign({}, state, { quotes: action.quotes });
    case ADD_QUOTES:
      const newQuotes = [...state.quotes, ...action.quotes];
      window.localStorage.setItem("quotes", JSON.stringify(newQuotes));
      return Object.assign({}, state, { quotes: newQuotes });
    case ADD_QUOTE:
      const newTheQuotes = [...state.quotes].push(action.quote);
      window.localStorage.setItem("quotes", JSON.stringify(newTheQuotes));
      return Object.assign({}, state, { quotes: newTheQuotes });
    case SET_RANDOM_QUOTE:
      const randomIndex = Math.floor(Math.random() * (state.quotes.length - 1));
      return Object.assign({}, state, {
        randomQuote: state.quotes[randomIndex],
      });
    case TOGGLE_LIKE:
      const updatedLiked = state.quotes.map((quote) => {
        if (quote.id === action.quoteId)
          return Object.assign({}, quote, { liked: !quote.liked });
        return quote;
      });
      window.localStorage.setItem("quotes", JSON.stringify(updatedLiked));

      return Object.assign({}, state, { quotes: updatedLiked });
    default:
      return state;
  }
}
