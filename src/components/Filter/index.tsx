import React, { FC, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styles from "./Filter.module.css";

type FilterProps = {
  filters: {
    name: string;
    id: string;
  }[]
}

const Filter:FC<FilterProps> = ({ filters }) => {
  const { categorySearch, setCategorySearch } = useContext(SearchContext);
  return (  
    <ul className={styles.filters}>
      <li onClick={() => setCategorySearch("")} className={`${styles.filter} ${categorySearch === "" ? styles.filterSelected : ""}`}>
        All
      </li>
      {
        filters.map( ({name, id}) => (
          <li key={id}>
            <button onClick={() => setCategorySearch(id)} className={`${styles.filter} ${categorySearch === id ? styles.filterSelected : ""}`}>
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default Filter;