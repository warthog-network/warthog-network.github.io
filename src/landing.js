import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from './navbar';
import './App.css';

import wartcoin from './soldierwart.webp';
import tokengraph from './tokenomics.png';
import sandwich from './sandwichproblem.webp';
import { BiSolidChevronsDown } from "react-icons/bi";

const Landing = () => (

    

    <div className='backdrop' >

        <OffcanvasExample />



        <Container >
            <Row><Col>
            <h1 className='Keyfacts'>WARTHOG NETWORK</h1><br />
                    <h2 className='backgroundimage'>-Rethinking the blockchain-</h2><br/>
                        <p className='paragraph'><strong>"Warthog’s decentralized network empowers individuals with fair, balanced, and synergized CPU/GPU work. It secures hardcoded DeFi and token technologies, eliminating the risks of smart contracts. Our goal is a safer, more efficient blockchain, aligned with the original vision of cryptocurrency: "one CPU, one vote."</strong></p>
                    <p className='paragraph'> Warthog network strives to be the most innovative and technological state of the art blockchain in the world. Our mission is to cross-breed innovative approaches into blockchain technology to defend decentralization and bring easy-to-use decentralized finance to the masses.
                        We are a relatively young project with the ambitious goals to revolutionize the crypto space by aggressively implementing<strong> features that no other blockchain project can offer</strong>: fast and resource-friendly sync by using a thread-based sync model, the world's first Proof of Balanced Work mining algorithm which favors decentralization, nodes which can run and save the chain directly in your browser, and soon also peer to peer communication between browser nodes.
                    </p>
            </Col>
                <Col >
                <img className='logotoken' src={tokengraph} alt="" /><h1>Tokenomics</h1><p className='paragraph'>  100% is publicly mineable. 0% is minted, premined, reserved for anyone.
            </p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><p className='chainspec'>
               <img className='logohome' src={wartcoin} alt="" /><br />
               
               <h5>CHAIN SPEC</h5>
               <li>COIN UNIT = 1 WART</li>
               <li>BLOCK TIME = 20 SECONDS</li>
               <li>REWARD = 3 WART</li>
               <li>PRECISION = 0.00000001 WART (8 digits)</li>
               <li>HALVING =  EVERY 2 YEARS</li>
               <li>SUPPLY = 18921599.68464 (~19M) WART</li>
               <li>DIFFICULTY ADJUSTEMENT = EVERY 8640 BLOCKS (2 days)</li>
               
               </p>

                    </Col>
                    <Row>
                    <p className='paragraph'>
                    
                       <h2 className='backgroundimage'> But there is more</h2><p> <img className='App-logo' src={sandwich} alt=''></img>We currently make great progress in solving the Sandwich Problem (front/back running) in DeFi using hard-coded non-smart-contract DeFi and a custom matching engine. This would solve one of the biggest problems of DeFi. In the long run, Warthog shall become a notable player in the DeFi world. Our matching engine shall merge the two different worlds of discrete orders (like in classical exchanges) and continuous liquidity pools. Atomic swaps with other chains are also planned.</p>
                       
                    </p>
                   
                </Row>
            </Row>


            <Row><Col>
                

            </Col>
                <Col>
               
                </Col></Row>
            <br /><br />
            <Row >
                
                <h1 className='Keyfacts'  style={{ display: 'flex', justifyContent: 'center' }}>
                     
                     KEY FACTS   
                     
                     
                </h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <BiSolidChevronsDown />
                <BiSolidChevronsDown />
                </div>
                <p className='Keyfacts paragraph'>Remember the time when crypto was<strong> interesting and fun</strong>? We want to bring this golden age of crypto <strong>back to life</strong></p>
              
                <Row >
               
                <Col >
                
                   <h2 className='keyheaders backgroundimage'>no premine</h2> <p className='keyfacts '>Project was fairly launched on Bitcointalk</p>

                    <h2 className='keyheaders backgroundimage'>Written from scratch</h2><p className='keyfacts'>This project is NOT a fork/copy of anything else</p>
                </Col>
                <Col>
                   <h2 className='keyheaders backgroundimage'>no "Team/Dev" fund</h2> <p className='keyfacts'>No unfair allocation to anybody aka "team"/"development" funds</p>

                    <h2 className='keyheaders backgroundimage'>100% mineable</h2><p className='keyfacts'>100% of supply is publicly mineable, no coins were minted</p>
                </Col>
                <Col>
                    <h2 className='keyheaders backgroundimage'>Modern Codebase</h2><p className='keyfacts'>Using modern C++20 and tools like clangd, meson, ninja</p>

                    <h2 className='keyheaders backgroundimage'>Open Source</h2><p className='keyfacts'>You are welcome to contribute</p>

                </Col>
                </Row>
                </Row>

            <Row><h1 className='Keyfacts' style={{ display: 'flex', justifyContent: 'center' }}>REVOLUTIONARY FEATURES</h1>
                <p className='paragraph Keyfacts'>Warthog is a pioneer pushing the boundaries of blockchain technology. The following features are exclusive to Warthog.</p>
                <Col>
                    <p className='REVOLUTIONARY'><h2>Chain descriptor based sync<span class="text-icon">🔁</span></h2>Experimental new light-weight sync mechanism which requires less network communication and computational resources. For the first time, nodes can understand each other's forks and use this information to sync more efficiently.</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>Proof of Balanced Work<span class="text-icon">⚡️</span></h2>The world's first algorithm using PoBW concept! Now power of CPU is also important! This brings us closer to Satoshi's original vision of decentralization than ever before since large farms cannot easily join: "one machine one vote"</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>In-browser node<span class="text-icon">🗔</span></h2>Using bleeding edge technology like OPFS and SQLite's recent support for it, we are the world's first cryptocurrency which successfully ported full nodes to the browser - including chain store! Chain is not deleted when you close the browser.</p></Col>

            </Row>
            <Row><h1 className='Keyfacts' style={{ display: 'flex', justifyContent: 'center' }}>UPCOMING REVOLUTIONARY FEATURES</h1>
                
                <Col>
                    <p className='REVOLUTIONARY'><h2>P2P browser nodes<span class="text-icon">📡</span></h2>Browsers only allow TLS outgoing connections to hosts with a valid domain and certificate. We found a workaround by using WebRTC connections. This way nodes can to be signalled to establish a P2P connection to other browser nodes which greatly increases decentralization.</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>Hard-coded DeFi<span class="text-icon">💱</span></h2>Up to now DeFi uses smart contracts, nodes don't natively understand DeFi. In contrast, we will hard-code latest DeFi wisdom into the nodes leading to less vulnerabilities, less fees and more convenience and protection against scam techniques like hidden trading fees or supply inflation!</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>Solving DeFi's biggest problem<span class="text-icon">🥪</span></h2>DeFi is plagued by sandwich attacks and there is no real solution to it - yet. Embedding DeFi as a first-class-citizen allows us to design a custom matching engine in which transaction order does not play a role. This solves DeFi's sandwich problem.</p></Col>

            </Row>

<Row>
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Contributors</h1><p className='paragraph'>
Warthog's team consists of programmers and community managers who voluntarily contribute to the project in 
their free time. We are neither a company nor a formal organization and everyone can join or leave at any time. 
New contributors are warmly welcomed!</p>
</Row>
<Row>
    <Col>
    <h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >Pumbaa, Rafiki (and formerly Timon)</h2><p className='bio'>
Working full time in the crypto industry, these three crypto enthusiasts wrote the original implementation of Warthog. Timon is no longer with this project.
</p>
<h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >CoinFuMasterShifu</h2><p className='bio'>
Benefiting from his strong background in mathematics and statistics, CoinFuMasterShifu invented and wrote a paper on the theory of Proof of Balanced Work (PoBW). He also implemented Warthog's revolutionary Janushash mining algorithm (a PoBW algorithm).
</p>
<h2  className='keyheaders backgroundimage contributors' style={{   display: 'flex', justifyContent: 'center' }} >Polaire</h2>
<p className='bio'>
Polaire is helping a lot with miscellaneous things like GitHub actions, testing of new node versions and the website.
</p>
<h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >luk</h2>
<p className='bio'>
Luk actively keeps an eye on all warthog-related things and wrote the Warthog Dapp wallet. Warthog also profits from his good connections in the crypto sector.
</p>
<h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >M0sh1M0sh1y</h2>
<p className='bio'>
M0sh1M0sh1y does a great job at posting news at various social media channels and managing discord related things.
</p>
<h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >andrew</h2>
<p className='bio'>
The current blockchain explorer was developed by andrew. He also wrote the GUI wallet.
</p>
<h2 className='keyheaders backgroundimage contributors' style={{ display: 'flex', justifyContent: 'center' }} >YOU?</h2>
<p className='bio'>
This is an open source project and everyone is encouraged to contribute. You could help for example with C++ coding on the core project, web design, marketing and other tasks. Please contact us on Discord!
</p>
    </Col>
</Row>



        </Container>

    </div>
);

export default Landing;