import { DiagnosticoStep1 } from "./diagnostico-step-1";
import { useDiagnosisStore } from "@/hooks";
import DiagnosticoStep2 from "./diagnostico-step-2";

export const DiagnosticoSteps = () => {
  const currentStep = useDiagnosisStore((state) => state.diagnosticoStep);

  if (currentStep === 1) {
    return <DiagnosticoStep1 />;
  } else {
    return <DiagnosticoStep2 />;
  }
};
