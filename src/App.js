import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/router/navigation/navigation.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import Home from "./components/router/home/home.component";
import CheckOut from "./components/router/checkOut/checkOut.component";
import Shop from "./components/shop/shop.component";
import Authentication from "./components/router/authentication/authentication";

import SearchFiled from "./components/router/searchFiled/searchFiled.component";
import About from "./components/router/about/about.component";
import { homeItemsStart } from "./store/home/home.action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    dispatch(homeItemsStart());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth/*" element={<Authentication />} />
        <Route path="checkOut" element={<CheckOut />} />
        <Route path="search" element={<SearchFiled />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
