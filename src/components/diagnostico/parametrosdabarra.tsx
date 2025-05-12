import { ContentBox } from "@/components";

const ParametrosDaBarra = () => {
  return (
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
  );
};

export default ParametrosDaBarra;
