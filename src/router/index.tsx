import { AppLayout, Diagnostico, EnvioDeImagem, Home, NotFound } from '@/features'
import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Diagnostico/>}/>
                    <Route path="enviar-imagem/:opcaoCorpo/:doenca/:sexo" element={<EnvioDeImagem/>}/>
                    <Route path="diagnostico/:opcaoCorpo/:doenca/:sexo" element={<Diagnostico/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router