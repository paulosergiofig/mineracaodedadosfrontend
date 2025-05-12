import { CaixaDeUpload } from "@/components"
import { client } from "@/components/client"
import { useToast } from "@/hooks/use-toast"
import { AxiosError, AxiosPromise } from "axios"
import { useEffect, useState } from "react"

export const Home = () => {
  const [ file, setFile ] = useState<File>()
  const [ imagem, setImagem ] = useState<any[]>([])
  const { toast } = useToast()
  const sendImage = async () => {
    try {
      if (!!file){
        await client.sendImage('/', file).then((reqBody) => {
          toast.success('')
        })    
      }
    } catch (error: any) {
      if (error.response){
        const axiosError: AxiosError = error
        const statusText = axiosError.response?.request.statusText || undefined
        const statusCode = axiosError.response?.request.status || undefined
        toast.error(`${statusCode? statusCode: ''} : ${statusText? statusText.toString() : ''}`)
      }
    }
  }

  useEffect(() => {
    if(!!imagem[0]){
      const propAssertion = Object.keys(imagem[0]).find((el) => el === 'file')
      if(!!propAssertion) {
        setFile(imagem[0].file)
      }
    }
  }, [imagem])
  
  return (
    <div className="h-full bg-green-300 flex flex-col justify-center items-center">
      <CaixaDeUpload imagem={imagem} setImagem={setImagem} serverResponseStatus=""/>
      <button className="bg-red-300 p-3 rounded-lg m-3" onClick={sendImage}>mandar imagem</button>
    </div>
  )
}

