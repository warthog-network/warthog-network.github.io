import {ExclamationCircleOutlined} from "@ant-design/icons";
import {Button, Card} from "antd";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {ethers} from "ethers";


const Createaccount = (setWallet, setSeedPhrase) =>{
   
    const [newseedphrase, setNewSeedPhrase] = useState(null);
    const navigate=useNavigate();

    const generateWallet= (setWallet, setSeedPhrase) => {
        const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
        setNewSeedPhrase(mnemonic);
    }


    const setWalletAndMnemonic=()=>{
      
        setSeedPhrase(newseedphrase);
        setWallet(ethers.Wallet.fromPhrase(newseedphrase).address)
    }
    return(
<div className="mnemonicpage">
    <div className="mnemonic">
        <ExclamationCircleOutlined style={{fontSize:'20px'}}/>
    <div>
        Once you generate the seed phrase, save it securely in order to recover your wallet in the future.
    </div>
    </div>
    <Button  onClick={()=>generateWallet()}>generate seed phrase</Button>
    <Card className="seedphrasecard">
        {newseedphrase && <pre style={{whiteSpace:'pre-wrap'}}>{newseedphrase}</pre>}
    </Card>
    <Button onClick={()=>setWalletAndMnemonic()}>open your new wallet</Button>
   
        <br/><br/>
    <Button onClick={()=>navigate("/wartwallet")}>back home</Button>
</div>

);}

export default Createaccount;