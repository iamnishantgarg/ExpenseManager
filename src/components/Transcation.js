import React from "react";

export const Transcation = ({ t }) => {
  const sign = t.amount < 0 ? "-" : "+";
  return (
    <li className={t.amount < 0 ? "minus" : "plus"}>
      {t.text}{" "}
      <span>
        {sign}
        {Math.abs(t.amount)}$
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
