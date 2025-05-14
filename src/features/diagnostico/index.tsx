import { DiagnosticoStep1 } from "./diagnostico-step-1";
import { useDiagnosisStore } from "@/hooks";
import DiagnosticoStep2 from "./diagnostico-step-2";
import { useState } from "react";

export const DiagnosticoSteps = () => {
  const currentStep = useDiagnosisStore((state) => state.diagnosticoStep);
  const [req, setReq] = useState<any>()

  if (currentStep === 1) {
    return <DiagnosticoStep1 setReq={setReq} />;
  } else {
    return <DiagnosticoStep2 req={req} setReq={setReq} />;
  }
};
