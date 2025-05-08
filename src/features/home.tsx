import { useToast } from "@/hooks/use-toast"

export const Home = () => {
  const { toast } = useToast()
  const handleErrClick = () => {
    toast.error('error')
  }
  const handleSucClick = () => {
    toast.success('Diagnóstico concluído')
  }
  return (
    <div className="h-full">
      <button onClick={handleErrClick}>click to activate toast</button>
      <button onClick={handleSucClick}>click to activate good</button>
    </div>
  )
}

