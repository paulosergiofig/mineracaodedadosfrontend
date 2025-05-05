import diagnoxLogo from '../../assets/imgs/DIAGNOX_Logo.png'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='w-full bg-dark-blue shadow-xl'>
        <div className="mx-[2.25%] p-1 py-6">
            <NavLink to={'/'}>
                <img className='h-18' src={diagnoxLogo}/>
            </NavLink>
        </div>
    </header>
  )
}


