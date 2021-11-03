import React, { FC } from "react";
import styles from "./Filter.module.css";

type Filter = {
  name: string;
  id: string;
}

type FilterProps = {
  filters: Filter[];
}

const Filter:FC<FilterProps> = ({ filters }) => {
  return (  
    <ul className={styles.filters}>
      {
        filters.map( ({name, id}) => (
          <li key={id}>
            <button className={styles.filter}>
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default Filter;