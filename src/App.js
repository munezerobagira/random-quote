import { useContext } from "react";
import Loading from "./components/Loading";
import Main from "./components/Main";
import { QuotesContext } from "./context";
import { setRandomQuote, toggleLike } from "./reducers/quotesReducer";
function App() {
  const { quotes, dispatch } = useContext(QuotesContext);
  const quoteRandomizer = () => {
    return dispatch(setRandomQuote());
  };
  const likeQuote = (id) => {
    return dispatch(toggleLike(id));
  };
  console.log(quotes.randomQuote);
  if (quotes && quotes.randomQuote)
    return (
      <Main
        {...quotes.randomQuote}
        setRandomQuote={quoteRandomizer}
        likeQuote={likeQuote}
      />
    );
  return <Loading />;
}

export default App;
