import { Banner, ItemDeOpcaoDeDiagnostico, OpcoesDeDiagnostico } from "@/components"
import { useEffect } from "react"

export const Home = () => {
  useEffect(() => {
    localStorage.clear()
  }, [])
  
  return (
    <div className="justify-around h-full flex flex-col items-center">
      <Banner/>
      <div className="grid grid-rows-2 grid-cols-4 2xl:gap-12 xl:gap-8 lg:gap-4 gap-1">
      {OpcoesDeDiagnostico.map((opcao) => {
        return (
          <ItemDeOpcaoDeDiagnostico
          key={`id-${opcao.diagnosticoTipo}`}
          imgUrl={opcao.imgUrl} 
          description={opcao.description}
          diagnosticoTipo={opcao.diagnosticoTipo}
          />
        )
      })}
      </div>
    </div>
  )
}

