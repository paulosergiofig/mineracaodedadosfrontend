import React from 'react';

type BarraDoDiagnosticoProps = {
  progress: number;
  target: number;
  height?: number;
  diagnosisDetails: string
};

export const BarraDoDiagnostico: React.FC<BarraDoDiagnosticoProps> = ({
  progress,
  target,
  diagnosisDetails,
}) => {
  const numberPresetColor = progress < target ? 'black' : (
    target < 70 ? 'blue' : 'purple-700'
  )
  const barPresetColor = target < 70 ? 'blue' : 'purple-700'
  return (
    <div>
      <div className="text-xl py-[6px]">{diagnosisDetails}: 
        <span className={`text-${numberPresetColor} text-2xl ml-2 font-bold`}>{progress}%</span>
      </div>
    <div
      className={`w-full rounded-full overflow-hidden bg-gray-300 h-4`}>
      <div
        className={`h-full transition-all duration-500 ease-in-out bg-${barPresetColor}`}
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>

    </div>
  );
};

