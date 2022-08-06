import React from 'react'

function List({list}) {
  return (
    <ul>
        {list.map(item => {
            return <li key={item.id}>{item.name}</li>
        })}
    </ul>
  )
}

export default List