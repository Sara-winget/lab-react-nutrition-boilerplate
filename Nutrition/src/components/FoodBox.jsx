import React from 'react'
import { useState } from 'react';
import {useRef} from 'react'

function FoodBox({food}){
  const myRef=useRef();
  const [num,setNum]=useState(0)
  const [val,setVal]=useState(0)
  return(
    <>
    <div className="box" >
  <article className="media">
    <div style={{display:'flex'}}>
    <div style={{display:'flex',height:150,width:1000, padding:30,margin:20,boxSizing:'border-box',backgroundColor:'lightblue',alignItems:'center',justifyContent:'space-between'}}>

    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.img} height={50} width={50}/>
      </figure>
    </div>
    <div className="media-content" style={{ fontSize:30}}>
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.cal}</small>
        </p>
      </div>
    </div>
    <div className="media-right" style={{ display:'flex'}}>
      
        <div className="control">
          <input ref={myRef} id="num"  type="number" placeholder='type something here' onChange={(e)=>{setNum(e.target.value)}} style={{height:40,width:200} }/>
        </div>
        <div className="control">
          <button onClick={()=>{setVal(num)}} className="button is-info">
            +
          </button>
        </div>
     
    </div >
    </div>
      <div className='result' style={{backgroundColor:'white'}}>
   <h2> {val} {food.name}= {val*food.cal} clories </h2>
   
   <button onClick={()=>{setNum(0); setVal(0); myRef.current.value='' }}>Reset</button>
      </div>
      </div>
  </article>
</div>
    </>
  )
}
export default FoodBox;