import React from "react";
export const Search = (props) => {
  const inputStyle = {
    border:"1px solid #ccc",
    height:"25px",
    borderRadis:"5px"
  }
  return (
    <>
        <form>
            <input type="text" onChange={(e)=>props.handleSearch(e)} placeholder="Search Here..." style={inputStyle}/>
        </form>
    </>
  );
};