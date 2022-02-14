import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const [filterData, setFilterdData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterdData([])
    } else {
      setFilterdData(newFilter);
    }

  }

  return (
    <div className="search">
      <div className="searchInputs">

        <div>
          <input type="text" placeholder={placeholder} onChange={handleFilter} />
          {filterData.length === 0 ? <i className="bi bi-search ms-2"></i> : <i className="bi bi-x"></i>}
        </div>
        {filterData.length !== 0 && (
          <div className="dataResult">
            {filterData.slice(0, 1).map((value) => {
              return (
                <Link key={value._id} className="dataItem" to={`/product-details/${value._id}`}>
                  <p>{value.title}</p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
