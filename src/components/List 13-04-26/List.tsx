import React from 'react'

export default function List() {
  const items=['Apple','Banana','Orange','Mango','Watermelon','Cetaphal','Pomegranate',]
  return (
    <div>
      <h1>List of Fruits</h1>
      {items.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}
