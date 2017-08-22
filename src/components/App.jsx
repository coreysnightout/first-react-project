import React from "react";
import Header from './Header';
import Queue from "./Queue";


function App(props){

  var headerStyle = {
    textAlign: "center",
    fontFamily: "monospace",
    padding: "15",
    backgroundColor: "#f4f2f5",
  }

  return (
    <div>
      <div style={headerStyle}>
        <Header/>
      </div>
      <Queue/>
    </div>
  );
}

export default App;
