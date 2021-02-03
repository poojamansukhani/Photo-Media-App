import React from "react";
export const Search = (props) => {
  return (
    <>
        <form>
            <input type="text" onChange={(e)=>props.handleSearch(e)}/>
        </form>
    </>
  );
};