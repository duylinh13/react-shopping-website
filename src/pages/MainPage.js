import React from "react";
import HeroImage from "../ui/HeroImage";
import Introduction from "../ui/Introduction";
import Page1 from "../ui/Page1";
import StoryPage from "../ui/StoryPage";
import PageB from "../ui/PageB";
import Navigation from "../ui/Navigation";
import ProductList from "../ui/ProductList";

export default function MainPage() {
  return (
    <div className="pb-72">
      <HeroImage />
      <Introduction />
      <Page1 />
      <ProductList />
      <StoryPage />
      <PageB />
      <Navigation />
    </div>
  );
}
