import { AppLayout, Diagnostico, EnvioDeImagem, Home } from '@/features'
import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="enviar-imagem" element={<EnvioDeImagem/>}/>
                    <Route path="diagnostico/:parteDoCorpo/:doenca/:sexo" element={<Diagnostico/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router