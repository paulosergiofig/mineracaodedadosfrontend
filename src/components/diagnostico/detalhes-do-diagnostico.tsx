import { FC } from 'react'
import { DiagnosisInformationProps, WrapperBarraDoDiagnostico } from './barra-diagnostico/wrapper-da-barra'

interface DetalhesDoDiagnosticoProps {
    diagnosticos: DiagnosisInformationProps[]
}
const DetalhesDoDiagnostico: FC<DetalhesDoDiagnosticoProps> = (props) => {
  const { diagnosticos } = props
  return (
    <div className='flex flex-col w-full h-full gap-1'>
    {diagnosticos.map((item) => {
        return (
         <WrapperBarraDoDiagnostico probability={item.probability} diagnosis={item.diagnosis}/>
        )
    })}
    </div>
  )
}

export default DetalhesDoDiagnostico
