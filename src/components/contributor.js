import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Roadmap from './roadmap'

const Contributor = () => {
  return (
    <div>
        <Row><div>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Contributors</h1><p className='paragraph'>
                    Warthog's team consists of programmers and community managers who voluntarily contribute to the project in
                    their free time. We are neither a company nor a formal organization and everyone can join or leave at any time.
                    New contributors are warmly welcomed!</p>
                    </div>
            
                <Col className='contributors'>
                    <h2 className='keyheaders   '  >Pumbaa, Rafiki (and formerly Timon)</h2><p className='bio'>
                        Working full time in the crypto industry, these three crypto enthusiasts wrote the original implementation of Warthog. Timon is no longer with this project.
                    </p>
                    <h2 className='keyheaders  ' >CoinFuMasterShifu</h2><p className='bio'>
                        Benefiting from his strong background in mathematics and statistics, CoinFuMasterShifu invented and wrote a paper on the theory of Proof of Balanced Work (PoBW). He also implemented Warthog's revolutionary Janushash mining algorithm (a PoBW algorithm).
                    </p>
                    <h2 className='keyheaders  '  >Polaire</h2>
                    <p className='bio'>
                        Polaire is helping a lot with miscellaneous things like GitHub actions, testing of new node versions and the website.
                    </p>
                    <h2 className='keyheaders  '  >luk</h2>
                    <p className='bio'>
                        Luk actively keeps an eye on all warthog-related things and wrote the Warthog Dapp wallet. Warthog also profits from his good connections in the crypto sector.
                    </p>
                    <h2 className='keyheaders  '  >M0sh1M0sh1y</h2>
                    <p className='bio'>
                        M0sh1M0sh1y does a great job at posting news at various social media channels and managing discord related things.
                    </p>
                    <h2 className='keyheaders  '  >andrew</h2>
                    <p className='bio'>
                        The current blockchain explorer was developed by andrew. He also wrote the GUI wallet.
                    </p>
                    <h2 className='keyheaders  '  >YOU?</h2>
                    <p className='bio'>
                        This is an open source project and everyone is encouraged to contribute. You could help for example with C++ coding on the core project, web design, marketing and other tasks. Please contact us on Discord!
                    </p>
                </Col>
                <Col >
                <Roadmap/>
                </Col>
                </Row>
    </div>
  )
}

export default Contributor