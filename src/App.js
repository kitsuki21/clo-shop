import { useEffect } from "react";
import productsApi from "./api/productsApi";
import "./App.css";

function App() {
  useEffect(() => {
    productsApi().then((products) => console.log(products));
  }, []);

  return <div className="App"></div>;
}

export default App;
