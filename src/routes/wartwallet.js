import '../App.css';
import { useState } from 'react';
import logo from '../wartlogo.png';

import { useNavigate } from 'react-router-dom';



const Wartwallet =()=>{

const [selectedChain, setSelectedChain] = useState('warthog');
const navigate=useNavigate();

    return(
        <div className="wartwallet">
        <p>warty</p>
        <h3>network:{selectedChain}</h3>
        <>
        <img src={logo} className='logo' alt=''></img>
        <br/>
        <select onChange={(event) => {
                  setSelectedChain(event.target.value);
                }}>
                  <option value="Warthog">Warthog</option>
                  <option value="0x98">Polygon  </option>
                  
                </select>
                <br/>
                <h2>wallet home</h2>
                <p>welcome to your warthog wallet</p>
                <br/>
        <button onClick={()=>navigate('yourwartwallet')}> get new address</button>
        <br/>
        <button className="Wbutton" onClick={()=>navigate('recoverwartwallet')}>import from seed phrase</button>
        </>
        </div>
    )
}
export default Wartwallet;