import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Categories from "../components/category/Categories";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import productsApi from "../api/productsApi";
import { useSelector } from "react-redux";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );

  useEffect(() => {
    productsApi().then((products) => setProducts(products));
  }, []);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const filterCategoriesByCategory =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Header />

      <Categories
        handleChange={handleChangeSearchValue}
        searchValue={searchValue}
      />
      <Products
        searchValue={searchValue}
        products={filterCategoriesByCategory}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
};

export default Main;
