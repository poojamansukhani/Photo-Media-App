import React from "react";
export const LikeComment = (props) => {
  return (
    <>
        <ul className="list-unstyled action-list">
            <li><a onClick={props.handleLiked}>Most liked</a></li>
            <li><a onClick={props.handleComment}>Most commented</a></li>
        </ul>

    </>
  );
};