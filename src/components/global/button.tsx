import { FC, PropsWithChildren } from 'react'

const Button: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <button className={`
      2xl:w-[425px] 2xl:max-w-[425px] xl:w-[350px] xl:max-w-[350px] w-[285px] max-w-[285px]
      bg-dark-blue rounded-lg p-3 py-4 text-white
      transition-colors duration-200 ease-in-out
      hover:bg-gradient-darkblue hover:cursor-pointer
      ${className}
    `}>
      {children}
    </button>
  )
}

export default Button
