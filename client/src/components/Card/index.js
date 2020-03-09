import React from "react";
import "./style.css";

// function Card(props) {
//     return <div>{props.children}</div>;
//   }
  
//   export default Card;

export function Card({children}) {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  )
}
  
// function CardList(props) {
//   return <div>{props.children}</div>;
// }

// export default CardList;

export function CardList({children}) {
  return (
    <div>
      <li>
        {children}
      </li>
    </div>
  )
}