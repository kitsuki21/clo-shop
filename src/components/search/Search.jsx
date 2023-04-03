import React from "react";
import st from "./search.module.css";
import search from "../../assets/search.png";

const Search = ({ handleChange, searchValue }) => {
  return (
    <div className={st.search}>
      <input
        className={st.input}
        type="text"
        placeholder="Искать здесь..."
        value={searchValue}
        onChange={handleChange}
      />
      <button className={st.button} type="submit">
        <img className={st.img_search} src={search} alt="search" />
      </button>
    </div>
  );
};

export default Search;
