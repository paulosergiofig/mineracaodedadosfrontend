import { ContentBox } from "@/components";
import DetalhesDoDiagnostico from "@/components/diagnostico/detalhes-do-diagnostico";

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
          <ContentBox.Content className="!h-fit !min-h-0 rounded-lg flex flex-col items-center">
            <div className="w-full h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-700 mb-4" />
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Baixa prioridade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Alta prioridade</span>
              </div>
            </div>
          </ContentBox.Content>
        </ContentBox.Root>
      </div>
    </div>
  );
};
