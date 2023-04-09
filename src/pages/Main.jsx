import React, { useState } from "react";
import Header from "../components/header/Header";
import Categories from "../components/category/Categories";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";

import { useSelector } from "react-redux";

import "../App.css";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const filterProductsByCategory =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="App">
      <Header />

      <Categories
        handleChange={handleChangeSearchValue}
        searchValue={searchValue}
      />
      <Products searchValue={searchValue} products={filterProductsByCategory} />
      <Footer />
    </div>
  );
};

export default Main;
