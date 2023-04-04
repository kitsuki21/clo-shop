import React from "react";
import Search from "../search/Search";
import st from "./categories.module.css";
import { listCategories } from "../../listCategories";
import { selectedCategoryAction } from "../../store/selectedCategoryReducer";
import { useDispatch, useSelector } from "react-redux";

const Categories = ({ handleChange, searchValue }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );

  const handleClickCategory = (value) => () => {
    dispatch(selectedCategoryAction(value));
  };

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
