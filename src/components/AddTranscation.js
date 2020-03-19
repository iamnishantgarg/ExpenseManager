import React from "react";

export const AddTranscation = () => {
  return (
    <>
      <h3>Add New Transcation</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transcation</button>
      </form>
    </>
  );
};
