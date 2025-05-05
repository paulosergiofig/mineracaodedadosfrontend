import { Dropdown } from "@/components"
import { useState } from "react"

export const Home = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<{label: string, value: string}>()
  console.log(opcaoSelecionada)
  return (
    <Dropdown 
    placeholderText="Selecione XYZ" 
    options={[{label: 'Opcao A', value: 'A'}, {label: 'Opcao B', value: 'B'}]}
    opcaoSelecionada={opcaoSelecionada}
    setOpcaoSelecionada={setOpcaoSelecionada}
    />
  )
}

