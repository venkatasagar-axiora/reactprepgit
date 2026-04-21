import React from 'react'

export default function List() {
  const items = [
    {
      name: "Apple",
      price: 234
    }, {
      name: "banana",
      price: 500
    }
  ]
  return (
    <div>
      <h1>List of Fruits</h1>
      {items.map((item, index) => (
        <div>
          <p key={index}>{item.name}</p>
          <button className="btn btn-warning" type='submit' key={index}>{item.price}</button>
        </div>
      ))}
    </div>
  )
}
