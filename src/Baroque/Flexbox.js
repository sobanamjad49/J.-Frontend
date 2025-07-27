import React from 'react'
import { useState } from 'react'

function Flexbox() {
    let  [change,setchange]=useState(<img src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_1__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"/>)
    const click1=()=>{
      setchange(change=<img src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_1__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"/>)
    }
    const click2=()=>{
        setchange(change=<img src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_2__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"/>)

    }
    const click3=()=>{
 setchange(change=<img src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_3__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"/>)

}
  return (
    <div>
      <div>
       {change}
      </div>
      <div style={{display:"flex"}}>
<img onClick={click1} src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_1__1.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"/>
<img onClick={click2} class="ml-20" src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_2__1.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"/>
<img onClick={click3} class="ml-24" src="https://www.junaidjamshed.com/media/catalog/product/j/w/jw-24-1717_3__1.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"/>
      </div>
    </div>
  )
}

export default Flexbox
