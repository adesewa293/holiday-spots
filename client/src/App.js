import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [getSpot, setGetSpot] = useState([]);

  async function handleHolidaySpot() {
    const API = "http://localhost:8090/getholidayspot";
    const res = await axios.get(API);
    
    setGetSpot(res.data);
  }

  return (
    <div className="App">
<button onClick={handleHolidaySpot}>Click to seee chris' favorite holiday spots</button>
      <div>
        <h1>Holiday location List</h1>
        <ul>
          {getSpot.map((item) => (
            <li key={item.id}>
              <h2>Location name: {item.name}</h2>
              <strong>Description: {item.description}</strong>
              <img src={item.image} alt="location" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

