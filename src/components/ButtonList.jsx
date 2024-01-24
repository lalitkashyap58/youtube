import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentine"];
  return (
    <div className='flex fixed bg-gray-400 w-full z-50 mx-2 '>
      {list.map((name,index)=><Button key={index} name={name}/>)}
     

    </div>
  )
}

export default ButtonList