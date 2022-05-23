import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CoopSearchInput() {
  return (
    <div>
      <div className="input-group">
        <span className="input-group-prepend" style={{height: "32px"}}>
          <div className="input-group-text bg-white border-right-0">
            <FontAwesomeIcon icon={faSearch}/>
          </div>
        </span>
        <input
          className="form-control border-left-0 custom-search-border"
          type="search"
          value={""}
          placeholder="Search for something..."
          id="example-search-input"
          style={{height: "32px"}}
        />
      </div>
    </div>
  );
}
