import { Suspense } from "react";
import { Button, ContentBox } from "@/components";
import { useDiagnosisStore } from "@/hooks";
import DiagnosticoStep2Suspense from "./diagnostico-step-2-suspense";
import okIcon from "../../assets/imgs/icon_confirmCircled.png";
import reloadIcon from "../../assets/imgs/reset.png";

const DiagnosticoStep2 = () => {
  const updateCurrentPage = useDiagnosisStore(
    (state) => state.setDiagnosticoStep
  );

  const goBackToStep1 = () => {
    updateCurrentPage(1);
  };

  return (
    <div className="h-full w-full flex justify-center">
      <div
        className="w-fit h-full grid grid-cols-2 grid-rows-auto justify-center items-center
       place-content-center place-items-center 2xl:gap-y-6 2xl:gap-x-30 "
      >
        <div className="flex flex-col justify-center items-center place-self-end">
          <ContentBox.Root>
            <ContentBox.Title>Imagem Original</ContentBox.Title>
            <ContentBox.Content className="flex items-center justify-center">
              <Suspense fallback={<DiagnosticoStep2Suspense />}></Suspense>
            </ContentBox.Content>
          </ContentBox.Root>
        </div>
        <Button
          onClick={() => {
            goBackToStep1();
          }}
          className="row-start-2 place-self-center flex items-center justify-center gap-2"
        >
          <img src={reloadIcon} alt="ok-mark" className="2xl:w-[30px]" />
          Enviar novo exame
        </Button>

        <div className="flex flex-col justify-start items-start place-self-start">
          <ContentBox.Root>
            <ContentBox.Title className="flex justify-start gap-3">
              <img src={okIcon} alt="ok-mark" className="2xl:w-[30px]" />
              Análise Completa
            </ContentBox.Title>
            <ContentBox.Content className="flex items-center justify-center">
              <Suspense fallback={<DiagnosticoStep2Suspense />}></Suspense>
            </ContentBox.Content>
          </ContentBox.Root>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticoStep2;
