import diagnoxLogo from '../../public/assets/imgs/DIAGNOX_Logo.png'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='w-full bg-dark-blue shadow-xl'>
        <div className="mx-[1.25%] p-1 py-2">
            <NavLink to={'/'}>
                <img src={diagnoxLogo}/>
            </NavLink>
        </div>
    </header>
  )
}


