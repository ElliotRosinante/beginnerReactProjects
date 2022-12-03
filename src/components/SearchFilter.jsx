import React, { useState } from "react";
import JSONdata from "./MOCK_DATA.json";
import "./SearchFilterStyles.css";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;
    setSearchTerm(inputText);
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search...."
        value={searchTerm}
        onChange={handleChange}
      />
      {JSONdata.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={val.id} className="user">
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFilter;
