import { Header } from '@/components'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <div className="w-screen bg-background">
      <Header/>
      <div className='pt-[120px] pb-12 xl:pb-[120px] h-screen'>
        <Outlet/>
      </div>
    </div>
  )
}


