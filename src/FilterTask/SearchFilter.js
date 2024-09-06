// 3. **Search Filter:** - Create a search filter
//  that highlights items in a list matching the search query.

import React, { useState } from "react";

const SearchFilter = () => {
  const [searchItm, setSearchItm] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const highlightTxt = (text,query) => {

    // if (!query) {
    //     return text
    // }
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return parts.map((part,index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span className="text-bg-warning">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={searchItm}
        onChange={(e) => setSearchItm(e.target.value)}
      />

      <ul>
            <li>
                {
                    items.map((item,index) =>(
                        <li key={index}>{highlightTxt(item,searchItm)}</li>
                    ))
                }
            </li>
      </ul>
    </div>
  );
};

export default SearchFilter;
