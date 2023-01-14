import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";

import './style/header.scss'
import './style/home.scss'
import './style/founder.scss'
import './style/menu.scss'
import './style/footer.scss'
import './style/contact.scss'
import './style/cart.scss'
import './style/shipping.scss'
import './style/confirmOrder.scss'
import './style/paymentsuccess.scss'
import "./style/login.scss";
import "./style/profile.scss";
import "./style/table.scss";
import "./styles/orderDetails.scss";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
