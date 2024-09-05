import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import { BiSolidChevronsDown } from "react-icons/bi";
const Keyfacts = () => {
  return (
    <div>
            <Row >

<h1 className='Keyfacts font-mono' style={{ display: 'flex', justifyContent: 'center' }}>

    KEY FACTS


</h1>
<div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-evenly' }}>
    <BiSolidChevronsDown />
    <BiSolidChevronsDown />
</div>
<div className='center'>
<p className=' paragraph'>Remember the time when crypto was<strong> interesting and fun</strong>? We want to bring this golden age of crypto <strong>back to life</strong></p>
</div>
<Row >

    <Col >

        <h2 className='keyheaders'>no premine</h2> <p className='keyfacts paragraph '>Project was fairly launched on Bitcointalk</p>

        <h2 className='keyheaders'>Written from scratch</h2><p className='keyfacts paragraph'>This project is NOT a fork/copy of anything else</p>
    </Col>
    <Col>
        <h2 className='keyheaders'>no "Team/Dev" fund</h2> <p className='keyfacts paragraph'>No unfair allocation to anybody aka "team"/"development" funds</p>

        <h2 className='keyheaders'>100% mineable</h2><p className='keyfacts paragraph'>100% of supply is publicly mineable, no coins were minted</p>
    </Col>
    <Col>
        <h2 className='keyheaders'>Modern Codebase</h2><p className='keyfacts paragraph'>Using modern C++20 and tools like clangd, meson, ninja</p>

        <h2 className='keyheaders'>Open Source</h2><p className='keyfacts paragraph'>You are welcome to contribute</p>

    </Col>
</Row>
</Row>

    </div>
  )
}

export default Keyfacts