import React from 'react'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <div className=" top-0 w-full bg-purple-300">
      Placeholder do Header
      <Outlet/>
    </div>
  )
}


