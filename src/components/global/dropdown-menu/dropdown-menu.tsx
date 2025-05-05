import { FC, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DropdownProps {
    placeholderText: string
    searchBarIconUrl?: string
    options: {label: string, value: string}[]
    opcaoSelecionada: any
    setOpcaoSelecionada: (option: {label: string, value: string}) => void
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { placeholderText, options, opcaoSelecionada, setOpcaoSelecionada, searchBarIconUrl } = props
  const [open, setOpen] = useState<boolean>(false)
  return (
    <DropdownMenu open={!!open}>
    <DropdownMenuTrigger onClick={() => setOpen(true)}>
      {!!searchBarIconUrl && searchBarIconUrl}
      {!!opcaoSelecionada ? opcaoSelecionada.label : placeholderText}
    </DropdownMenuTrigger>
    <DropdownMenuContent
    onInteractOutside={() => setOpen(false)}
    className='w-max max-w-full text-dark'>
      {options.map((opcao) => {
        return (
            <DropdownMenuItem
            key={`option-${opcao.value}`}
            onSelect={() => {
              setOpcaoSelecionada(opcao)
              setOpen(false)
            }}
            >{opcao.label}</DropdownMenuItem>
        )
      })}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}


