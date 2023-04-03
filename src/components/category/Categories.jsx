import React from "react";
import Search from "../search/Search";
import st from "./categories.module.css";
import { listCategories } from "../../listCategories";

const Categories = ({
  handleChange,
  searchValue,
  selectedCategory,
  handleClickCategory,
}) => {
  return (
    <div className={st.container}>
      <ul className={st.nav}>
        {listCategories.map(({ name }) => (
          <li
            onClick={handleClickCategory(name)}
            key={name}
            className={`${st.nav_elem} ${
              selectedCategory === name ? "nav_elem_active" : ""
            }`}
          >
            {name}
          </li>
        ))}
      </ul>
      <Search handleChange={handleChange} searchValue={searchValue} />
    </div>
  );
};

export default Categories;
