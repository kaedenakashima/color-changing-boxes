import React from "react";

const Square = ({rgba}) => {
  return (
    <div 
    className = "square"
    style={{ margin:"10px", background: rgba, border: "1px solid black" }} 
    />
  )
}

const Board = ({red = 127, green = 127, blue = 127, numItems = 5}) => {

  return(
    <div className="board">
      {[...Array(numItems)].map((item, iter) =>{
        let iterSpace = 2
        let newRed = (red + (iterSpace*iter)) % 255;
        let newGreen = (green + (iterSpace*iter)) % 255;
        let newBlue = (blue + (iterSpace*iter)) % 255;
         return <Square rgba = {`rgba(${newRed}, ${newGreen}, ${newBlue}, 1)` } />
      })}
    </div>
  )
  
}

export default Board;