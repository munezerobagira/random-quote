import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { QuotesProvider } from "./context";
render(
  <QuotesProvider>
    <App />
  </QuotesProvider>,
  document.getElementById("root")
);
