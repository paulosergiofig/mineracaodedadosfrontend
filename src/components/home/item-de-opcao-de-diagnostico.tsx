import { useDiagnosisStore } from '@/hooks'
import { FC } from 'react'
import { useNavigate } from 'react-router'

interface ItemDeOpcaoDeDiagnosticoComponentProps {
  imgUrl: string
  description: string
  diagnosticoTipo: string
}

export const ItemDeOpcaoDeDiagnostico: FC<ItemDeOpcaoDeDiagnosticoComponentProps> = (props) => {
  const { imgUrl, description, diagnosticoTipo } = props

  const atualizarDiagnosisStore = useDiagnosisStore((state) => state.setDiagnostico)
  const navigate = useNavigate()

  const handleClick = (diagnostico: string) => {
    atualizarDiagnosisStore(diagnostico)
    navigate(`/diagnostico/:opcaoCorpo/:doenca/:${diagnostico}`)
  }

  return (
    <button
      className="bg-white transition-transform duration-200 w-50 2xl:w-70
      hover:cursor-pointer ease-in-out hover:scale-105 hover:shadow-xl rounded-xl
      flex flex-col gap-6 p-12 items-center text-center shadow-lg font-poppins"
      onClick={() => handleClick(diagnosticoTipo)}
    >
      <img className='w-max max-w-full' src={imgUrl} alt={`${description}-image`} />
      <div className="text-gray-400 text-xl">{description}</div>
    </button>
  )
}
