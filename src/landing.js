import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from './navbar';
import './App.css';
import { useState, useEffect } from 'react';
import wartsoldier from './img/soldierwart.webp';
import tokengraph from './img/tokenomics.png';
import sandwich from './img/sandwich.webp';
import sandwiches from './img/sandwichproblem.webp';
import Navbar2 from './navbar2';
import exibitron from './img/exibitron.png'
import tradeogre from './img/tradeogre.png'
import xeggex from './img/xeggex.png'
import caldera from './img/caldera.png'
import discord from './img/discord.png'
import { motion } from "framer-motion";

import Keyfacts from './components/kefacts';
import Revfeatures from './components/revfeatures';
import Contributor from './components/contributor';
const Landing = () => {
    const text = "WARTHOG NETWORK".split(" ");

    const [windowDim, setWindowDim] = useState({
        winWidth: window.innerWidth,

    });

    const detectSize = () => {
        setWindowDim({
            winWidth: window.innerWidth,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDim])

    
    return (
        <div className='backdrop' >
            {(windowDim.winWidth > 1025)
                ? <Navbar2 />
                : <OffcanvasExample />
            }
            <Container className='landCont font-mono'>
                <Row>
                    <Col>
                        <h1 className='Keyfacts '>     {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 1000
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</h1><br />

                        <h2 className=' keyheaders'>-Rethinking the blockchain-</h2><br />
                        <p className='paragraph'><strong>"Warthog’s decentralized network empowers individuals with fair, balanced, and synergized CPU/GPU work. It secures hardcoded DeFi and token technologies, eliminating the risks of smart contracts. Our goal is a safer, more efficient blockchain, aligned with the original vision of cryptocurrency: "one CPU, one vote."</strong></p>
                        <p className='paragraph'>Our mission is to cross-breed innovative approaches into blockchain technology to defend decentralization and bring easy-to-use decentralized finance to the masses.
                            We are a relatively young project with the ambitious goals to revolutionize the crypto space by aggressively implementing<strong> features that no other blockchain project can offer</strong>: fast and resource-friendly sync by using a thread-based sync model, the world's first Proof of Balanced Work mining algorithm which favors decentralization, nodes which can run directly in your browser, and soon also peer to peer communication between browser nodes.
                        </p>
                    </Col>
            <Col >
                        <img className='logotoken' src={tokengraph} alt="" /><h1 className='keyheaders'>Tokenomics</h1><p className='paragraph'>  100% is publicly mineable. 0% is minted, premined, reserved for anyone.
                        </p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Row>
                    <Col>
                        <img className='logohome' src={wartsoldier} alt="" /><br />
                    </Col>
                    <Col>
                        <p className='chainspec '>
                            <h5 className='keyheaders'>CHAIN SPEC</h5>
                            <li>COIN UNIT = 1 WART</li>
                            <li>BLOCK TIME = 20 SECONDS</li>
                            <li>REWARD = 3 WART</li>
                            <li>PRECISION = 0.00000001 WART (8 digits)</li>
                            <li>HALVING =  EVERY 2 YEARS</li>
                            <li>SUPPLY = 18921599.68464 (~19M) WART</li>
                            <li>DIFFICULTY ADJUSTEMENT = EVERY 8640 BLOCKS (2 days)</li>
                        </p>
                    </Col>
                </Row>
            </Col>
                <Row>
                    <p className=''>

                        <h2 className=''> But there is more</h2><p className='paragraph'>We currently make great progress in solving the Sandwich Problem (front/back running) in DeFi using hard-coded non-smart-contract DeFi and a custom matching engine. This would solve one of the biggest problems of DeFi. In the long run, Warthog shall become a notable player in the DeFi world. Our matching engine shall merge the two different worlds of discrete orders (like in classical exchanges) and continuous liquidity pools. Atomic swaps with other chains are also planned.</p>

                    </p>
                </Row>
                <Row>
                    <Col>
                        <img className='App-logo-sandwich' src={sandwich} alt=''></img>
                    </Col>
                    <Col>
                        <img className='App-logo-sandwiches' src={sandwiches} alt=''></img>
                    </Col>
                </Row>
                </Row>
                    <Keyfacts />
                    <Revfeatures />
                <Row>
                    <Contributor />
                    
                </Row>

                <h1 className='textunderline'>WHERE TO BUY</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Row>
                        <Col>
                            <a href='https://exbitron.com/trade?market=wart-usdt'> <button className='xButton'><img className='exchangeButton' src={exibitron} alt=''></img><p className='xtext'>exibitron</p></button></a>
                        </Col>
                        <Col>
                            <a href='https://xeggex.com/market/WART_USDT'> <button className='xButton'><img className='exchangeButton' src={xeggex} alt=''></img><p className='xtext'>xeggex</p></button> </a>
                        </Col>
                        <Col>
                            <a href='https://tradeogre.com/exchange/WART-USDT'> <button className='xButton'><img className='exchangeButton' src={tradeogre} alt=''></img><p className='xtext'>tradeogre</p></button></a>
                        </Col>
                        <Col>
                            <a href='https://discord.com/channels/1126486458698584107/1205481571109445633'>  <button className='xButton'><img className='exchangeButton' src={caldera} alt=''></img><p className='xtext'>caldera</p></button></a>
                        </Col>
                        <Col>
                            <a href='https://discord.com/channels/1126486458698584107/1133081739816861716'>  <button className='xButton'><img className='exchangeButton' src={discord} alt=''></img><p className='xtext'>discord</p></button></a>
                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    )
};

export default Landing;