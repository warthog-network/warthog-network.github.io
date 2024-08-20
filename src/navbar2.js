import React from 'react'

const navbar2 = () => {
  return (
    <div>    <Nav.Link className="logohome " as={Link} to={"./getstarted"}>
                    
    <h1 className="logohome1 logo1left" >Get Started</h1>
</Nav.Link>
<Nav.Link className="logohome " as={Link} to={"./news"}>
    
    <h1 className="logohome1 logo1left" >NEWS</h1>
</Nav.Link></div>
  )
}

export default navbar2