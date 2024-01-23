import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentine"];
  return (
    <div className='flex'>
      {list.map((name,index)=><Button key={index} name={name}/>)}
     

    </div>
  )
}

export default ButtonList