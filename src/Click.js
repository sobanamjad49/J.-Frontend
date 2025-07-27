
// import React, { useState } from 'react'


// function Click() {
//   let  [count,setcount]=useState(0)
//    const addvalue=()=>{
//     if(count>=20){

//     }
//     else{
// setcount(count+1)
//     }
//     }
//     const removevalue=()=>{
//       if(count<=0){

//       }
//       else{
//   setcount(count-1)
//       }
//           }
//   return (
//     <div> 
//       <div class="text-4xl text-white bg-fuchsia-950 text-center h-16 p-2">
//     React Hook UseState
//    </div>
//    <br/>
//    <div class="text-4xl text-white bg-fuchsia-500 text-center h-16 w-fit m-auto p-2">
// Counter App
//    </div>
//    <br/>
//         <div class="text-6xl text-white bg-fuchsia-700 text-center w-24 h-24 m-auto p-3 rounded-lg">
//      {count}
//    </div>
  
//    <div  style={{display:'flex',columnGap:'20px',marginLeft:"550px",marginTop:"30px"}}>
//    <div class="bg-sky-500 text-1xl text-white p-1" onClick={addvalue}><button>Increment</button></div>
//    <div class="bg-red-500  text-1xl text-white p-1" onClick={removevalue}><button>Decrement</button></div>
   
   
   
   
   
   
//    {/* <div onClick={() => { if(count>=20){

//     }
//     else{
// setcount(count+1)
//     }}}>+</div>
//    <div onClick={() => { if(count<=0){

// }
// else{
// setcount(count-1)
// }}}>-</div> */}

//   </div>
//     </div>
//   )
// }

// export default Click









import React, { useEffect, useRef, useState } from 'react'

function Click() {
  let [click,setcount] = useState(0)
  let [name,setname] = useState("Soban")

  useEffect(()=>{
    console.log("chl gya")
    document.title=`your Name  is ${name}`
   
  },[click])


  const textInput= useRef(null)
  function handleClick(){
    textInput.current.style.background = "red";

  }


  const cl=useRef(null)

  function button(){
    cl.current.style.background='red'
  }
  return (
    <div>

<div class="text-4xl text-white bg-fuchsia-950 text-center h-16 p-2">
 React Hook UseState
 </div>
  <br/>
 <div class="text-4xl text-white bg-fuchsia-500 text-center h-16 w-fit m-auto p-2">
 Counter App
 </div>
   <br/>
 <div class="text-6xl text-white bg-fuchsia-700 text-center w-24 h-24 m-auto p-3 rounded-lg">
{click}
</div>
<button  onClick={()=>{setcount(click+1)}} >click</button>
   {/* <div  style={{display:'flex',columnGap:'20px',marginLeft:"550px",marginTop:"30px"}}>
   <div class="bg-sky-500 text-1xl text-white p-1" onClick={()=>{setcount(click+1)}} ><button>Increment</button></div>
   <div class="bg-red-500  text-1xl text-white p-1" onClick={()=>{setcount(click-1)}} ><button>Decrement</button></div>
   </div> */}

<p>name: {name}</p>
   <button  onClick={()=>{setname("soban amjad")}}>change name</button>

<p  className='text-3xl mt-4'>Use Ref Hooks</p>

     <input
        type="text" placeholder='name'
        value="Focus the text input"
      
        ref={textInput}
      />
      <button   onClick={handleClick}>change color</button> 

<br/>



      <input type='text' placeholder='name'   ref={cl}/>
      <button  onClick={button}>change</button>
    
    </div>
  )
}

export default Click









