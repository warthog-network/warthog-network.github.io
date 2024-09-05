import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import { TbBrowserCheck } from "react-icons/tb";
const Revfeatures = () => {
  return (
    
    <div>
    <Row><h1 className='Keyfacts font-mono' style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>REVOLUTIONARY FEATURES</h1>
    <div className='center '>
        <p className= 'paragraph '>Warthog is a pioneer pushing the boundaries of blockchain technology. The following features are exclusive to Warthog.</p>
        </div>
        <Col>
            <h2 className='keyheaders'>Chain descriptor based sync<span class="text-icon">🔁</span></h2><p className='REVOLUTIONARY border-2 border-black'>Experimental new light-weight sync mechanism which requires less network communication and computational resources. For the first time, nodes can understand each other's forks and use this information to sync more efficiently.</p></Col>
        <Col><h2 className='keyheaders'>Proof of Balanced Work<span class="text-icon">⚡️</span></h2><p className='REVOLUTIONARY border-2 border-black'>The world's first algorithm using PoBW concept! Now power of CPU is also important! This brings us closer to Satoshi's original vision of decentralization than ever before since large farms cannot easily join: "one machine one vote"</p></Col>
        <Col><h2 className='keyheaders'><TbBrowserCheck />In-browser node🌐</h2><p className='REVOLUTIONARY border-2 border-black'>Using bleeding edge technology like OPFS and SQLite's recent support for it, we are the world's first cryptocurrency which successfully ported full nodes to the browser - including chain store! Chain is not deleted when you close the browser.</p></Col>

    </Row>
    <Row><h1 className='Keyfacts font-mono' style={{padding: '3rem', display: 'flex', justifyContent: 'center' }}>UPCOMING REVOLUTIONARY FEATURES</h1>

        <Col>
            <h2 className='keyheaders'>P2P browser nodes<span class="text-icon">📡</span></h2> <p className='REVOLUTIONARY border-2 border-black'>Browsers only allow TLS outgoing connections to hosts with a valid domain and certificate. We found a workaround by using WebRTC connections. This way nodes can to be signalled to establish a P2P connection to other browser nodes which greatly increases decentralization.</p></Col>
        <Col><h2 className='keyheaders'>Hard-coded DeFi<span class="text-icon">💱</span></h2><p className='REVOLUTIONARY border-2 border-black'>Up to now DeFi uses smart contracts, nodes don't natively understand DeFi. In contrast, we will hard-code latest DeFi wisdom into the nodes leading to less vulnerabilities, less fees and more convenience and protection against scam techniques like hidden trading fees or supply inflation!</p></Col>
        <Col><h2 className='keyheaders'>Solving DeFi's biggest problem<span class="text-icon">🥪</span></h2><p className='REVOLUTIONARY border-2 border-black'>DeFi is plagued by sandwich attacks and there is no real solution to it - yet. Embedding DeFi as a first-class-citizen allows us to design a custom matching engine in which transaction order does not play a role. This solves DeFi's sandwich problem.</p></Col>

    </Row>
</div>
  )
}

export default Revfeatures