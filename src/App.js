import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
