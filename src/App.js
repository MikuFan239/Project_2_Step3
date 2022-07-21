import Sidenav from "./Sidenav";
import Home from "./Home";
import HowToJoin from "./HowToJoin";
import HowToJoin2 from "./HowToJoin2";
import ConcertDetailMM2019 from "./ConcertDetailMM2019";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npx json-server --watch data/data.json --port 8000 

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
        
        <div className="content">
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/ConcertDetail:MM2019" element={<ConcertDetailMM2019 />}/>
              <Route path="/HowToJoin" element={<HowToJoin />}/>
              <Route path="/HowToJoin2" element={<HowToJoin2 />}/>
            </Routes>
          </div>
      </div>
    </Router>

  );
}

export default App;
