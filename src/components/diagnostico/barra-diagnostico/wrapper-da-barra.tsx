import { useState, useEffect, PropsWithChildren, FC } from 'react';
import { BarraDoDiagnostico } from './barra-do-diagnostico';

export interface DiagnosisInformationProps { 
  probability: number,
  diagnosis: string,
}

export const WrapperBarraDoDiagnostico: FC<PropsWithChildren<DiagnosisInformationProps>> = (props) => {
  const { children, probability, diagnosis } = props
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < probability ? prev + 1 : probability));
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-3'>
      <BarraDoDiagnostico diagnosisDetails={diagnosis} target={probability} progress={progress} />
      {children}
    </div>
  );
};
