import React from "react";
import "./style.css";


export function Card({ children }) {
  return (
    <div className="container cardList">
      <div className="row">
        <div className="card col-md-4 float-left">
          {children}
        </div>
      </div>
    </div>
  )
}

export function CardList({ children }) {
  return (
    <div>
        {children}
    
    </div>
  )
}