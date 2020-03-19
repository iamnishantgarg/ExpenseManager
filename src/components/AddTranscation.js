import React, { useState } from "react";

export const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setamount] = useState(0);

  return (
    <>
      <h3>Add New Transcation</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setamount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transcation</button>
      </form>
    </>
  );
};
