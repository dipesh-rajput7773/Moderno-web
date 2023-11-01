import React from 'react'
import { Outlet } from 'react-router-dom'
function CategoryParent() {
  return (
<>
<h2>hello</h2>
    <Outlet/>
</>

  )
}

export default CategoryParent