import { Nav } from "./components/nav";
import { Treatment } from "./components/treatment";
import { Time } from "./components/time";
import { Info } from "./components/info";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="col" id="treatment">
          <Treatment />
        </div>
        <div className="col" id="time">
          <Time />
        </div>
        <div className="col" id="info">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
