import { Dropdown } from "@/components"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export const Home = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<{label: string, value: string}>()
  console.log(opcaoSelecionada)
  return (
  <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <Dropdown 
    placeholderText="Selecione XYZ" 
    options={[{label: 'Opcao A', value: 'A'}, {label: 'Opcao B', value: 'B'}]}
    opcaoSelecionada={opcaoSelecionada}
    setOpcaoSelecionada={setOpcaoSelecionada}
    />
  </DialogContent>
</Dialog>
  )
}

