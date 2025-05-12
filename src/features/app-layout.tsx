import { Header } from '@/components'
import ToastProvider from '@/utils/toast-provider'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <ToastProvider>
    <div className="w-screen bg-background-app">
        <Header/>
        <div className='pt-[96px] 2xl:pt-[112px] pb-[96px] 2xl:pb-[112px] h-screen'>
          <Outlet/>
        </div>
    </div>
    </ToastProvider>
  )
}


