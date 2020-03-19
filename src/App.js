import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TranscationList } from "./components/TranscationList";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpenses />
      <TranscationList />
    </div>
  );
}

export default App;
