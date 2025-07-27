// import React, { useState } from 'react'


// function Header7() {
//   const[color,setColor] =useState('red')
//   return (
//     <div style={{background:color,height:'100vh'}}>
//      <button onClick={() => setColor('green')}>Green</button>
//       <button onClick={() => setColor('blue')}>Blue</button>
//       <button onClick={() => setColor('red')}>Red</button>


//     </div>
//   )
// }

// export default Header7

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Header7() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
       Sign In
      </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body>
          <Form>
          <p className="font-medium">SIGN IN</p>
          <Form>
            <Form.Group className="lg:w-80 w-full">
              <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                Email Address
              </Form.Label>
              <Form.Control
                className="rounded-none border-t-0 border-l-0 border-r-0"
                type="email"
                required
              />

              <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                Password
              </Form.Label>
              <Form.Control
                className="rounded-none border-t-0 border-l-0 border-r-0"
                type="password"
                required
              />
            </Form.Group>
            <div className="mt-4 flex justify-between">
              <span className="text-sm font-medium hover:text-gray-400">Forgot Your Password?</span>
              <button type="submit">Sign In</button>
            </div>
          </Form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header7;
