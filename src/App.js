import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Product from "./components/Pages/Product";
import SingleProduct from "./components/Pages/SingleProduct";
import PNF from "./components/Pages/PNF";
import ScrollToTop from "./components/Layout/ScrollToTop";
import CartPage from "./components/Pages/CartPage";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import { Provider } from "react-redux";
import store from "./utils/store";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PNF />} />
        </Routes> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <SingleProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
