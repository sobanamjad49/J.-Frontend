import React from 'react'
import Studentcontext from './Studentcontext'

const Studentstatecontent = (props)=> {
  // ek state banya jin jin  componet ko ma ijzat deta h wo kbi be call ho skatha ha direct call
    const state = {
        "name":"soban Amjad",
        "rollno":11223344
    }
  return (
<Studentcontext.Provider value={state}>
    {props.children}
</Studentcontext.Provider>

//jo meray studentstate ko call kry g ma Studentcontent ki madad say apny sab childern {props.childern} ko data day do g value={state}
//Studentcontent sab ko data provide kr day g jo const state ma banya h
  )
}

export default Studentstatecontent


// import React from 'react';
// import Studentcontext from './Studentcontext';

// const Studentstatecontent = (props) => {
//   // State object that will be shared with child components
//   const state = {
//     name: 'Soban',
//     rollno: 11223344,
//   };

//   return (
//     <Studentcontext.Provider value={state}>
//       {props.children} {/* Rendering the children components and passing the context data */}
//     </Studentcontext.Provider>
//   );
// };

// export default Studentstatecontent;
