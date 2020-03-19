import React from "react";
import "./style.css";


export function Card({ children }) {
  return (
    <div className="card col-md-3 col-lg-3 float-left">
      {children}
    </div>
  )
}

export function CardList({ children }) {
  return (
    <div className="container cardList">
      <div className="row">
        {children}
      </div>
    </div>
  )
}