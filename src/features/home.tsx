import { FilePicker } from "@/components"
import { useState } from "react";

export const Home = () => {
  const [image, setImage] = useState([]);
  const [r, setR] = useState('')

  return (
    <div className="h-full">
      <div className="p-3 flex justify-center">
      <FilePicker imagem={image} setImagem={setImage} serverResponseStatus={r}/>

      </div>
      <button onClick={() => {
          setR('uploaded')
      }}>upload</button>
            <button onClick={() => {
          setR('pending')
      }}>pend</button>
                  <button onClick={() => {
          setR('')
      }}>null</button>
    </div>
  )
}

