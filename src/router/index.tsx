import { AppLayout, Diagnostico, EnvioDeImagem, Home } from '@/features'
import { NotFound } from '@/components'
import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="enviar-imagem/:opcaoCorpo/:doenca/:sexo" element={<EnvioDeImagem/>}/>
                    <Route path="diagnostico/:opcaoCorpo/:doenca/:sexo" element={<Diagnostico/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router