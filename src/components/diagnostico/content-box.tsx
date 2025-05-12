import { FC, PropsWithChildren } from "react"

interface ContentBox {
    Title: FC<PropsWithChildren<{className?: string}>>
    Root: FC<PropsWithChildren<{className?: string}>>
    Content: FC<PropsWithChildren<{className?: string}>>
}
// 06-05: className nao funciona em sobrescrever estilos ja declarados.

const Root: ContentBox['Root'] = ({children, className}) => {
    return (
    <div className={`
        w-[400px] xl:w-[500px] 2xl:w-[700px] max-w-full h-max
         rounded-lg shadow-2xl overflow-y  ${className ?? ''}`}>
            {children}
    </div>)
}
const Title: ContentBox['Title'] = ({children, className}) => {
    console.log(className)
    return (
    <div className={` mx-[8%] text-lg xl:text-2xl py-4 xl:py-7 font-medium ${className ?? ''}`}>
        {children}
    </div>)
}

const Content: ContentBox['Content'] = ({children, className}) => {
    return ( 
    <div className={`bg-white rounded-b-lg p-6 px-10
    h-[200px] xl:h-[380px] 2xl:h-[450px] overflow-y-auto ${className ?? ''}`}>
        {children}
    </div>)
}

const ContentBox: ContentBox = () => {}

ContentBox.Root = Root
ContentBox.Title = Title
ContentBox.Content = Content

export {ContentBox}