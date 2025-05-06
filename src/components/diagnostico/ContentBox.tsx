import { FC, PropsWithChildren } from "react"

interface ContentBoxProps {
    title?: string
}

export const ContentBox: FC<PropsWithChildren<ContentBoxProps>> = (props) => {
    const { title, children } = props
    return (
        <div className="
         w-[400px] xl:w-[500px] 2xl:w-[700px] max-w-full h-max
         rounded-lg shadow-2xl ">
            {!!title && 
            (<div className="bg-content-box-title mx-[8%] text-2xl py-7 font-medium">
                {title}
            </div>)}
            <div className="bg-white rounded-lg p-6 px-10
            h-[200px] xl:h-[380px] 2xl:h-[450px]">
                {children}
            </div>
        </div>
    )
}