import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";

import './style/header.scss'
import './style/home.scss'
import './style/founder.scss'
import './style/menu.scss'
import './style/footer.scss'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
