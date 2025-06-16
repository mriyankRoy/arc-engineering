import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
