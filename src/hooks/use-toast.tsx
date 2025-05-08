import { toast } from "react-toastify"

interface toast {
    success: (args: any) => void
    error: (args: any) => void
    promise: (arg: any) => void
}

const toastSuccess = (props: string) => {
    return (
        <div>{props}</div>
    )
}
const appToast: toast = {
    success: (successMsg) => {
        toast.dark(toastSuccess(successMsg),
            {
                className: 'border border-blue bg-gray-600',
                position: 'bottom-right',
                hideProgressBar: true
            }
        )
    },

    error: (errorMsg) => {
        toast.error(errorMsg)
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





