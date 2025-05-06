import diagnoxLogo from '../../assets/imgs/DIAGNOX_Logo.png'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='top-0 w-full bg-dark-blue fixed'>
        <div className="mx-[2.25%] p-1 py-6">
            <NavLink to={'/'}>
                <img className='h-18' src={diagnoxLogo}/>
            </NavLink>
        </div>
    </header>
  )
}


