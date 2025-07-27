// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import { useState,useCallback,useRef,useEffect } from 'react'

// function Hh() {
//  const[length,setLength]=useState("8")
//  const[numberAllowed,setNumberAllowed]=useState(false)
//  const[characterAllowed,setCharacterAllowed]=useState(false)
//  const[password,setPassword]=useState("")
 
//  //useReference Hook
//  const passwordRef = useRef(null)


//  //useCallback Hook
//   const passwordGenerater= useCallback(() =>{
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) str += "0123456789"
//     if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for(let i= 1; i<=length; i++){
//       let char = Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)
//     console.log(pass)

//  },[length,numberAllowed,characterAllowed,setPassword])

//  //Callback hook for copying password no Clipboard

//  const copyPasswordToClipboard = useCallback(() => {
//   passwordRef.current?.select();
//   passwordRef.current?.setSelectionRange(0, 999);
//   window.navigator.clipboard.writeText(password)
// }, [password])


//  //useEffect Hook
//  useEffect(() =>{
//   passwordGenerater()

//  },[length,numberAllowed,characterAllowed,passwordGenerater])

 
//   return (
//     <div className='app'>
//         <div className='flex justify-center '>
//             <div className='bg-gray-300 border-2 border-black w-[26rem] p-3'>

//       <h1 className='text-center font-bold text-3xl'>Passward Generator</h1>

//       <div className='flex mt-3 justify-evenly'>
//       <label htmlFor="Password" className='text-md mt-1 font-bold'>Password : </label>
//       <Form>
//       <Form.Control type='text' className='w-auto border-black rounded-none'
//        placeholder='password'
//      value={password} 
//        readOnly
//        ref={passwordRef}
//         />
//         </Form>
//         <button onClick={copyPasswordToClipboard} className='p-1 w-16 border-black border-1 hover:bg-black hover:text-white'>Copy </button>
//         </div>

//       <br></br>
      

//       <input type="range"  className='w-60 ml-7 '
//        min={6} 
//        max={100}
//       value={length} 
//       onChange={(e)=>setLength(e.target.value)}
//        />
//        <label className='text-lg font-bold border-1 border-b-black ml-2'>Length: {length}</label>
      
//       <br/>

//       <div className='flex justify-center'>
//       <input type="checkbox"
//        defaultChecked={numberAllowed}
//        id="numberInput"  
//         onChange={() =>{
//           setNumberAllowed((prev)=>!prev)
//         }}/>
//          <label htmlFor="numberInput" className='text-md font-bold mr-2'>Number</label>

//       <input type="checkbox" 
//        defaultChecked={characterAllowed}
//       id="CharacterInput"
//       onChange={()=>{
//         setCharacterAllowed((prev)=>!prev)
//       }}
//        />
//        <label htmlFor="CharacterInput" className='text-md font-bold '>Character</label>
//        </div>

//        </div>
//     </div>
//     </div>
//   )
// }

// export default Hh

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hh() {
  const [selectedPage, setSelectedPage] = useState(1); // State to track the selected page

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber); // Update the selected page when clicked
  };

  return (
    <div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </a>
          <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium">1</span>
              to
              <span className="font-medium">10</span>
              of
              <span className="font-medium">97</span>
              results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Page Number 1 */}
              <Link to="/H1">
                <span
                  onClick={() => handlePageClick(1)}
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    selectedPage === 1 ? 'bg-indigo-600' : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  1
                </span>
              </Link>

              {/* Page Number 2 */}
              <Link to="/H1">
                <span
                  onClick={() => handlePageClick(2)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    selectedPage === 2 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                  }`}
                >
                  2
                </span>
              </Link>

              {/* Page Number 3 */}
              <a
                href="#"
                onClick={() => handlePageClick(3)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  selectedPage === 3 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                }`}
              >
                3
              </a>

              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>

              {/* Page Number 8 */}
              <a
                href="#"
                onClick={() => handlePageClick(8)}
                className={`relative hidden items-center px-4 py-2 text-sm font-semibold ${
                  selectedPage === 8 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                } md:inline-flex`}
              >
                8
              </a>

              {/* Page Number 9 */}
              <a
                href="#"
                onClick={() => handlePageClick(9)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  selectedPage === 9 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                }`}
              >
                9
              </a>

              {/* Page Number 10 */}
              <a
                href="#"
                onClick={() => handlePageClick(10)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  selectedPage === 10 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                }`}
              >
                10
              </a>

              <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hh;
