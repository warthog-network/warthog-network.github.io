/*import logo from './logo.svg';*/
import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";
import Wartwallet from "./routes/wartwallet";
import News from "./routes/news";
import Getstarted from "./routes/getstarted";
import Createaccount from './routes/createaccount';
import Recoveraccount from './routes/recoveraccount';

function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  >
        <Route path="/" element={<Landing />}  />
        <Route path="/getstarted" element={<Getstarted />}  />
        <Route path="/news" element={<News />}  />
        <Route path="/wartwallet" element={<Wartwallet />}  />
        <Route path="/wartwallet/yourwartwallet" element={<Createaccount /*setSeedPhrase={setSeedPhrase} setWallet={setWallet}*//>}  />
        <Route path="/wartwallet/recoverwartwallet" element={<Recoveraccount />}  />
      
      
   
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
