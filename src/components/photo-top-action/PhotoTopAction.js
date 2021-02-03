import React from "react";
import {LikeComment} from "../function/LikeComment";
import {Search} from "../function/Search";
export const PhotoTopAction = (props) => {
  return (
    <>
        <div className="top-actions">
            <LikeComment handleLiked={props.handleLiked}/>
            <Search handleSearch={props.handleSearch}/>
        </div>
    </>
  );
};