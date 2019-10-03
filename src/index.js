import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./styles.css";

function rgbaGen(red, green, blue, alpha = 1) {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

class App extends React.Component {
  //was function App () {
    constructor() {
      super();

      this.state = {
        red: 230,
        green: 127,
        blue: 10
      };
    }

  updateSquare = (event, color) => {
    let newValue = event.target.value;

    switch (color) {
      case "red":
        this.setState({ red: newValue});
        break;
      case "green":
        this.setState({ green: newValue});
        break;
      case "blue":
        this.setState({ blue: newValue});
        break;
      default:
        this.setState({ red: newValue});
    }
  }

  render(){
    //Added for class
    let { red, green, blue } = this.state
  
   
    return (
      <div className="App">
        <label>Red</label>
        <input type="range" min="0" max="255" placeholder = "Enter Red Value" onChange={
          (event)=> this.updateSquare(event, "red")
        } />
        <label>Green</label>
        <input type="range" min="0" max="255" placeholder = "Enter Green Value" onChange={
          (event)=> this.updateSquare(event, "green")
        } />
        <label>Blue</label>
        <input type="range" min="0" max="255" placeholder = "Enter Blue Value" onChange={
          (event)=> this.updateSquare(event, "blue")
        } />

        <Board red={red} green={green} blue={blue} numItems={20} />

      </div>
    );
  } //Added for class
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

