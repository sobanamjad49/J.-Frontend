//rfce
import React from 'react'
import './Header.css'
function Header(props ) {
   // React/Js portion

function myhandler(){
    alert('Hello React')
}

  return (
//HTML portion
    <div>
<div>
<img src={props.imgUrl} />
<hr />
<h1>{props.title}</h1>

</div>

<button onClick={myhandler}>Click Me</button>

    </div>
  )
}

export default Header
