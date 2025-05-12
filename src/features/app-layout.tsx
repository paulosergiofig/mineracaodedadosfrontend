import { Header } from '@/components'
import ToastProvider from '@/utils/toast-provider'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <ToastProvider>
    <div className="w-screen bg-background-app">
        <Header/>
        <div className='pt-12 xl:pt-[110px] pb-12 xl:pb-[110px] h-screen'>
          <Outlet/>
        </div>
    </div>
    </ToastProvider>
  )
}


