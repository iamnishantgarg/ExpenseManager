import React from "react";

export const TranscationList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-500$</span>
          <button className="delete-btx">x</button>
        </li>
      </ul>
    </>
  );
};
