import React, { useCallback, useState } from 'react'
import Service from './Service'
function Contact() {

      
        const[count,setCount] = useState(0)
      
      const myfunc = useCallback(()=>{},[])
         return (
           <div>
            
          {/* service ma many ek function call kia myfunc ka name say */}
        <Service servicefunc={myfunc}/> 
              <h1 className='text-6xl bold'>count:{count}</h1>
               <button onClick={()=>{setCount(count+1)}}>counter++</button>
           </div>
    
  )
}

export default Contact
