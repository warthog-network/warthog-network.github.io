/*import logo from './logo.svg';*/

import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";

import News from "./routes/news";
import Getstarted from "./routes/getstarted";
import Whitepaper from './routes/whitepaper';
import ALGORITHM from './routes/algorithm';
import FAQs from './routes/FAQs';
function App() {
  
  const rootElement = document.getElementById("root");
  render(
    
    <Router basename={process.env.PUBLIC_URL}>
     
      <Routes>
        
        <Route exact path="/" element={<Home />}  >
        <Route exact path="/" element={<Landing />}  />
        <Route exact path="/getstarted" element={<Getstarted />}  />
        <Route exact path="/news" element={<News />}  />
        <Route exact path="/algorithm" element={<ALGORITHM />}  />
        <Route path="/whitepaper" element={<Whitepaper />}  />
        <Route path="/faq" element={<FAQs />}  />
      
   
   
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
}

const Home = () => (
  <div>
 <Outlet/>
 </div>);

export default App;
