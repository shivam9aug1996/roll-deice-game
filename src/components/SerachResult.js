import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SerachResult = ({ searchResult, setSearch }) => {
  let navigate = useNavigate();

  const data = searchResult.map((item, index) => {
    return item.title;
  });
  return (
    <>
      <div className="search-box">
        {searchResult.map((item, index) => {
          return (
            <div key={item.id} className="ds-dataset-1">
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SerachResult;
