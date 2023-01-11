import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";

import './style/header.scss'
import './style/home.scss'
import './style/founder.scss'
import './style/menu.scss'
import './style/footer.scss'
import './style/contact.scss'
import './style/cart.scss'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
