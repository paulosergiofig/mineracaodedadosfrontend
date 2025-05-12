import { useDiagnosisStore } from "@/hooks";
import { Button, CaixaDeUpload, Dropdown } from "@/components";
import mulherDiagnostico from '../../assets/imgs/mulher_raiox2.png'
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const DiagnosticoStep1 = () => {
  const [reqStatus, setReqStatus] = useState("unrequested");
  const [sexo, setSexo] = useState<{ label: string; value: string }>();
  const [imagem, setImg] = useState<any>([]);

  const isIdadeOssea: boolean = useDiagnosisStore((state) => state.diagnostico) === "";
  const updateCurrentPage = useDiagnosisStore((state) => state.setDiagnosticoStep);
  const currentPage = useDiagnosisStore((state) => state.diagnosticoStep);

  const goToStep2 = () => {
    console.log(currentPage)
    updateCurrentPage(2)
  }

  const { toast } = useToast()

  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center items-center gap-7">
        <div
          className=" bg-linear-to-r from-gradient-brightblue to-gradient-darkblue flex items-start rounded-2xl
          2xl:w-[1475px] xl:w-[980px] xl:min-h-[444px] lg:w-[800px]
          2xl:p-15 2xl:px-16 xl:p-10 p-10 px-12
        "
        >
          <div className="flex flex-col relative">
            {!!isIdadeOssea && (
              <Dropdown
                buttonClassName={`
              hover:cursor-pointer bg-white rounded-sm ${
                !!sexo ? "text-black" : "text-gray-500"
              }
              2xl:w-[280px] 2xl:py-1 2xl:p-3 2xl:mb-6 2xl:text-sm
              xl:w-[260px] xl:py-1 xl:p-2
              w-[200px] p-2 py-1 text-xs mb-4

              `}
                itemClassName={`
                2xl:w-[268px]  
                xl:w-[248px]  
                w-[190px]  
            `}
                placeholderText="Selecione o sexo do paciente"
                opcaoSelecionada={sexo}
                setOpcaoSelecionada={setSexo}
                options={[
                  {
                    label: "Masculino",
                    value: "M",
                  },
                  {
                    label: "Feminino",
                    value: "F",
                  },
                ]}
              ></Dropdown>
            )}
            <CaixaDeUpload
              imagem={imagem}
              setImagem={setImg}
              serverResponseStatus={reqStatus}
            />
            <p className="text-white pt-3 text-xs">
              Somente PNG e JPG (4mb max)
            </p>
            {/* refatorar para div pai ser grid-cols-2, e colocar col-start-2 e mb-0 para a imagem */}
            {/* pra resolver essa ESTUPIDEZ PREGUIÇOSA */}
            <img src={mulherDiagnostico} alt="" 
            className={`z-0 absolute 
              2xl:ml-[110%]  
              xl:ml-[125%]  
              ml-[130%] 
              ${!!isIdadeOssea ? '2xl:my-[-6.9%] xl:my-[0.55%] my-[1%]' : 
                '2xl:h-[120%] 2xl:my-[-6.2%] xl:my-[-0.6%] my-[-9.5%] xl:h-auto h-[130%]'} 
            `}/>
          </div>
        </div>
        <Button
        disabled={!imagem.length}
        className={`${!imagem.length && 'bg-gray-500 hover:bg-gray-500 hover:cursor-default'}`}
        onClick={() => {
          if(!!isIdadeOssea && !sexo) {
            toast.error('Selecione o sexo referente à idade óssea')
            return
          }
          goToStep2()
        }}>Avançar</Button>
      </div>
    </div>
  );
};
