import { toast } from "react-toastify"
import confirmIcon from '../assets/imgs/icon_confirmFilled.png'

interface toast {
    success: (args: any) => void
    error: (args: any) => void
    promise: (arg: any) => void
}

const toastComponent = (text: string, type: string) => {
    //dividir em 2 componentes, ta rodando 3 ifs
    return (
        <div className={`
            flex flex-row items-center gap-2
            ${type === 'error' && ''}
        `}
        >{type === 'success'? (
            <img className="w-fit h-4" src={confirmIcon} alt="confirm_icon" />
        ) : <a className="text-2xl font-extrabold mr-1 rounded-full border-white border-2 px-3
        ">!</a>}{type !== 'error'? text : <a className="truncate max-w-[315px]">{text}</a>}</div>
    )
}

const appToast: toast = {
    success: (successMsg) => {
        toast.dark(toastComponent(successMsg, 'success'),
            {
                autoClose: 2000,
                className: 'border border-green border-2 text-sm',
                style: { width: '400px'},
                position: 'bottom-right',
                hideProgressBar: true
            }
        )
    },

    error: (errorMsg) => {
        toast.dark(toastComponent(errorMsg, 'error'),
            {
                autoClose: 2000,
                className: 'border border-red-500 border-2 text-sm',
                style: {  backgroundColor: '#b30000', width: '400px'},
                position: 'bottom-right',
                hideProgressBar: true
            }
        )
    },

    promise: (promise) => {
        toast.promise(
        promise,
            {
                pending: 'Analisando exame ',
                success: 'Diagnóstico concluído ',
                error: 'Ocorreu um erro',
            }
        )
        console.log(promise)
    }
}

const useToast = () => {
    return ({ toast: appToast })
}

export { useToast }





