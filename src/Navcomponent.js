import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';
function Navcomponent() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

     <div >
<Link to="/"  style={{textDecoration:"none"}}>Home</Link>
     </div>
     <div>
<Link to="/Service"  style={{textDecoration:"none"}}>Service</Link>
     </div>
     <div>
<Link to="/contact"  style={{textDecoration:"none"}}>Contact Us</Link>
     </div>
     <div>
<Link to="/Studentsstatesample"  style={{textDecoration:"none"}}>Studentsstatesample</Link>
     </div>
     <div>
<Link to="/Me"  style={{textDecoration:"none"}}>Me</Link>
     </div>

     
   

      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}

export default Navcomponent
