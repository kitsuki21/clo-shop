import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Categories from "../components/category/Categories";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import productsApi from "../api/productsApi";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    productsApi().then((products) => setProducts(products));
  }, []);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClickCategory = (value) => () => {
    setSelectedCategory(value);
  };

  const filterCategoriesByCategory =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Header />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleChange={handleChangeSearchValue}
        searchValue={searchValue}
        handleClickCategory={handleClickCategory}
      />
      <Products
        selectedCategory={selectedCategory}
        searchValue={searchValue}
        products={filterCategoriesByCategory}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
};

export default Main;
