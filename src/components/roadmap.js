import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Roadmap = () => {
  return (
    <div>
         <Col >
                <ul className='checklist' >
                    <Row className='roadmap'>
                        <h2 style={{ display: 'flex', justifyContent: 'center' }} className='keyheaders'>ROAD MAP</h2>
                        <Col >
                        <h6 style={{ display: 'flex', justifyContent: 'center' }}> Q1 2024</h6>
                        
                        <li className='check'> Develop world's first PoBW algo</li>
                        <li className='check'>Develop stratum pool</li>
                        <li className='check'>Listing on Exbitron</li>
                        <li className='check'>Listing on Xeggex</li>
                        </Col>
                        <Col>
                        <h5 style={{ display: 'flex', justifyContent: 'center' }}>Q2 2024</h5>
                        <li className='check'>Refactor Networking code to support multiple transports</li>
                        <li className='check'>Research on in-browser node support</li>
                        <li className='check'>Support in-browser nodes (unique in the crypto world)</li>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                        <h4 style={{ display: 'flex', justifyContent: 'center' }}>Q3 2024</h4>
                        <li>Support P2P browser communication using WebRTC</li>
                        <li>Add Token support</li>
                        <li>Create demo of custom matching engine</li>
                        </Col>
                        <Col>
                        <h3 style={{ display: 'flex', justifyContent: 'center' }} >Q4 2024</h3>
                        <li>Add lightweight hard-coded DeFi support.</li>
                        </Col>
                        </Row>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>-2025-</h1>
                        <li>Research on atomic swaps and assess feasibility of implementation in Warthog</li>
                        <li>See more details in the "NEWS" tab and in the docs</li>
                        
                    </ul >
                </Col>
    </div>
  )
}

export default Roadmap