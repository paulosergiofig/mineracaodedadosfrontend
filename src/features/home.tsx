import { FilePicker } from "@/components"
import { useState } from "react";

export const Home = () => {
  const [image, setImage] = useState([]);
  
  return (
    <div className="h-full">
      <FilePicker imagem={image} setImagem={setImage}/>
    </div>
  )
}

