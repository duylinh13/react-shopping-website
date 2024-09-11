import "./App.css";

import React from "react";
import Header from "./ui/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./ui/ShoppingCart";
import OrderForm from "./ui/OrderForm";
import IntroducePage from "./pages/IntroducePage";
import MyPage from "./pages/MyPage";
import PriavacyPage from "./pages/PriavacyPage";
import Footer from "./ui/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <div className="bg-white container mx-auto max-w-[96rem]">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shoping" element={<ShoppingCart />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/priavacy" element={<PriavacyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
