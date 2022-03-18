import React, { createRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../data/data";
import SerachResult from "./SerachResult";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  //const [search, setSearch] = useState("");
  const myRef = createRef();
  const handleSearch = (e) => {
    console.log(e);
    setSearch(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSearchResult(false);
    }, 100);
  };

  useEffect(() => {
    data();
  }, [search]);

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);
    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };
  }, []);

  const onClickOutsideHandler = (event) => {
    //setShowSearchResult(false);
    console.log(myRef);
    // if (showSearchResult && !myRef.current.contains(event.target)) {
    //   setSearchResult(false);
    // }
  };

  const data = () => {
    let emt = products.filter((item, index) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    console.log(search);
    console.log(emt);
    setSearchResult(emt);
    setShowSearchResult(true);
  };

  const handleFocus = () => {
    if (search) setShowSearchResult(true);
  };

  const handleUp = () => {
    alert();
  };
  const handleDown = () => {};

  return (
    <>
      <input
        id="search-box-id"
        type="text"
        value={search}
        onChange={(e) => handleSearch(e)}
        // onBlur={() => handleBlur()}
        // onFocus={() => handleFocus()}
      />
      <div ref={myRef}>
        {search && showSearchResult && (
          <SerachResult searchResult={searchResult} setSearch={setSearch} />
        )}
      </div>
    </>
  );
};

export default SearchBox;
