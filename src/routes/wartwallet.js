import '../App.css';
import { useState } from 'react';
import logo from '../wartlogo.png';

const getnewaddress = async () =>{

}


const Wartwallet =()=>{
const [selectedChain, setSelectedChain] = useState('warthog');


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
        <button className="Wbutton" onClick={getnewaddress()}> get new address</button>
        <br/>
        <button className="Wbutton" onClick={getnewaddress()}>import from seed phrase</button>
        </>
        </div>
    )
}
export default Wartwallet;