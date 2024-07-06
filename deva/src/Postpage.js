import React from 'react'
import { Link } from 'react-router-dom'
const Postpage = ({post}) => {
  return (
    <div>
      {/* Render individual posts here */}
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Postpage