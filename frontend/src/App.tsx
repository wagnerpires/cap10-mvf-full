import { useState } from "react";
import "./App.css";
import { ContAuthenticate, DadosAutContexto } from "./ContAuthenticate";
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [dadosAutContexto, setDadosAutContexto] = useState<DadosAutContexto>({
    authenticated: false,
  });

  return (
    <ContAuthenticate.Provider
      value={{ dadosAutContexto, setDadosAutContexto }}
    >
      <Routes />
      <ToastContainer />
    </ContAuthenticate.Provider>
  );
}

export default App;