import { FC } from 'react'

interface ItemDeOpcaoDeDiagnosticoComponentProps {
  imgUrl: string
  description: string
  opcaoCorpo: string
  setOpcaoCorpo: (parteDoCorpo: string) => void
}

export const ItemDeOpcaoDeDiagnostico: FC<ItemDeOpcaoDeDiagnosticoComponentProps> = (props) => {
  const { imgUrl, description, opcaoCorpo, setOpcaoCorpo } = props
  return (
    <button
      className="bg-white transition-transform duration-200 w-80
      hover:cursor-pointer ease-in-out hover:scale-105 hover:shadow-xl rounded-xl
      flex flex-col gap-6 p-12 items-center text-center shadow-lg font-poppins"
      onClick={() => setOpcaoCorpo(opcaoCorpo)}
    >
      <img className='w-max max-w-full' src={imgUrl} alt={`${description}-image`} />
      <div className="text-gray-400 text-xl">{description}</div>
    </button>
  )
}
