import { AppLayout, Diagnostico, Home, NotFound } from '@/features'
import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="enviar-imagem" element={<Diagnostico />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
