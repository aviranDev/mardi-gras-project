import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/main/home";
import Gallery from "./components/main/gallery";
import Footer from "./components/main/footer";
import About from "./components/main/about";
import Cart from "./components/cart/cart";
import Signup from "./components/user/signup";
import Signin from "./components/user/signin";
import Logout from "./components/user/logout";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/main/pageNotFound";
import userService from "./services/userService";
import Signupbiz from "./components/user/signupBiz";
import CreateCard from "./components/card/createCard";
import CreateProduct from "./components/product/createProduct";
import MyCards from "./components/card/myCards";
import MyProducts from "./components/product/myProducts";
import AllProducts from "./components/product/allProducts";
import AllCards from "./components/card/allCards";
import EditMyCard from "./components/card/editMyCard";
import EditMyProduct from "./components/product/editMyProduct";
import Contact from "./components/main/contact";
import DisplayUserProducts from "./components/product/displayUserProducts";
import CheckoutForm from "./components/cart/checkout";
import ProductDetails from "./components/product/productDetails";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    setUser(userService.getCurrentUser());
    setAdmin(userService.adminEntery());
  }, []);

  console.log(user);
  console.log(admin);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar user={user} />
      </header>
      <main>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/create-product"
              element={<CreateProduct />}
            />
            <Route path="/create-card" element={<CreateCard />} />

            <Route
              path="/display-my-cards/edit/:id"
              element={<EditMyCard />}
            />
            <Route
              path="/display-my-cards"
              element={<MyCards />}
            />

            <Route path="display-my-products"
              element={<MyProducts />}
            />

            <Route path="display-my-products/edit">
              <Route
                path=":id"
                element={<EditMyProduct />}
              />
            </Route>
          </Route>


          <Route path="/all-products" element={<AllProducts />} exact />

          <Route path="product-details">
            <Route
              path=":id"
              element={<ProductDetails />}
              exact
            />
          </Route>

          <Route path="display-user-products">
            <Route
              path=":id"
              element={<DisplayUserProducts />}
            />
          </Route>

          <Route path="/checkout-form" element={<CheckoutForm />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/cards" element={<AllCards />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/biz" element={<Signupbiz />} exact />
          <Route path="/signout" element={<Logout />} exact />
          <Route path="/gallery" element={<Gallery />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/pageNotFound" element={<PageNotFound />} exact />
          <Route render={() => <Navigate to="/pageNotFound" />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
