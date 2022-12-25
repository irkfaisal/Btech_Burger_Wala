import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import './style/header.scss';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
