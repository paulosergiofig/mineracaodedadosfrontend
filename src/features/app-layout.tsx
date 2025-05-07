import { Header } from '@/components'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <div className=" top-0 w-full">
      <Header/>
      <Outlet/>
    </div>
  )
}


