import React from 'react'
import { Link,Outlet} from 'react-router-dom'
const Postlayout = () => {
  return (
    <main>
    <Link to="/Postpage/11111">post1</Link>
    <br></br>
    <Link to="/Postpage/22222">post2</Link>
    <br></br>
    <Link to="/Postpage/33333">post3</Link>
    
    <Outlet />
    </main>
  )
}

export default Postlayout