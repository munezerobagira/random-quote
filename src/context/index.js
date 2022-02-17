import { createContext, useEffect, useReducer } from "react";
import quotesReducer, {
  setQuotes,
  setRandomQuote,
} from "../reducers/quotesReducer";
export const QuotesContext = createContext({
  quotes: [],
  randomQuote: null,
});
export const QuotesProvider = function ({ children }) {
  const [quotes, dispatch] = useReducer(quotesReducer, {});
  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (window.localStorage.getItem("quotes")) {
        data = JSON.parse(window.localStorage.getItem("quotes"));
      } else {
        data = await (await fetch("/quotes.json")).json();
        window.localStorage.setItem("quotes", JSON.stringify(data));
      }

      const randomIndex = Math.floor(Math.random() * (data.length - 1));
      dispatch(setQuotes(data));
      dispatch(setRandomQuote(data[randomIndex]));
    };
    fetchData();
  }, []);
  return (
    <QuotesContext.Provider value={{ quotes, dispatch }}>
      {children}
    </QuotesContext.Provider>
  );
};
