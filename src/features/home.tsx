import { ContentBox } from "@/components";
import DetalhesDoDiagnostico from "@/components/diagnostico/detalhes-do-diagnostico";
import ParametrosDaBarra from "@/components/diagnostico/ParametrosDaBarra";
export const Home = () => {
  return (
    <div className="h-full w-full p-3 flex flex-row justify-center items-center gap-10">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center gap-2">
          <ContentBox.Root>
            <ContentBox.Title>Analise Completa</ContentBox.Title>

            <ContentBox.Content></ContentBox.Content>
          </ContentBox.Root>
          <button className="py-3 p-10 w-fit rounded-lg bg-blue text-white text-3xl ">
            botao placeholder
          </button>
        </div>
      </div>
      <div>
        <ContentBox.Root>
          <ContentBox.Title>Analise Completa</ContentBox.Title>
          <ContentBox.Content className="">
            <DetalhesDoDiagnostico
              diagnosticos={[
                { probability: 10, diagnosis: "Doenca na caixa toraxica" },
                { probability: 70, diagnosis: "diagnostico 2" },
                { probability: 30, diagnosis: "diagnostico 3" },
                { probability: 30, diagnosis: "diagnostico 3" },
                { probability: 30, diagnosis: "diagnostico 3" },
              ]}
            />
          </ContentBox.Content>
        </ContentBox.Root>
        <ContentBox.Root className="my-3">
         <ParametrosDaBarra />
        </ContentBox.Root>
      </div>
    </div>
  );
};
