import "./App.css";
import { useState } from "react";
import Shopping from "./components/Shopping";

function App() {
  const [marks, setMarks] = useState([]);
  let getDataFromServer = async () => {
    let reqOptions = { method: "GET" };
    let JSONData = await fetch("http://localhost:1918/results", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    setMarks(JSOData);
  };
  return (
    <div className="App">
      <input type="search" placeholder="search"></input>
      <div>
        <button
          onClick={() => {
            getDataFromServer();
          }}
        >
          Marks
        </button>
      </div>
      <div className="detailsContainer">
        {marks.map((ele, i) => {
          return (
            <div className="detailsDiv">
              <h2>Id:{ele.id}</h2>
              <a href=""><img src={ele.image}></img></a>
              <p>{ele.price}</p>
              <p>{ele.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
