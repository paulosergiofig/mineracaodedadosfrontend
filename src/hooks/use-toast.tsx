import { toast } from "react-toastify"
import confirmIcon from '../assets/imgs/icon_confirmFilled.png'
import { toastSpinner } from '../assets/toast-spinner'

interface toast {
    success: (args: any) => void
    error: (args: any) => void
    promise?: (arg: any) => void
    loading: (arg: any) => void
}

const toastComponent = (text: string, type: string) => {
    switch (type) {
        case 'success':
            return (
                <div className={`
                    flex flex-row items-center gap-2
                `}>
                    <img className="w-fit h-6 mx-1" src={confirmIcon} alt="confirm_icon" />
                    {text}
                </div>
            );
        case 'loading':
            return (
                <div className={`
                    flex flex-row items-center gap-2
                `}>
                    <img className="w-10 h-10 mx-1" src={toastSpinner} alt="loading_icon" />
                    {text}
                </div>
            );
        case 'error':
            return (
                <div className={`
                    flex flex-row items-center gap-2
                `}>
                    <a className="text-2xl font-extrabold mr-1 rounded-full border-white border-2 px-3">!</a>
                    <a className="truncate max-w-[315px]">{text}</a>
                </div>
            );
        default:
            return null;
    }
};

const appToast: toast = {
    success: (successMsg) => {
        toast.dark(toastComponent(successMsg, 'success'),
            {
                autoClose: 2000,
                className: 'text-md',
                style: { width: '400px', backgroundColor: '#293450', paddingLeft: '1.5rem' },
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

    loading: () => {
        toast.dark(toastComponent('Analisando exame', 'loading'),
        {
            autoClose: 10000,
            className: 'text-white',
            style: { width: '400px', backgroundColor: '#293450', paddingLeft: '1.5rem', color: 'white' },
            position: 'bottom-right',
            hideProgressBar: true
        }
    )
    }
    //EX
    // const getData = () => {
    //     const id = toast.loading("Please wait...")
    //     axios.get(`some-url`)
    //       .then(res => { 
    //          toast.update(id, {render: "All is good", type: "success", isLoading: false});
    //     }).catch(err => {
    //            toast.update(id, {render: "Something went wrong", type: "error", isLoading: false });
    //       });
    //    }
    // promise: (promise) => {
    //     toast.promise(
    //     promise,
    //         {
                
    //             pending: 'Analisando exame ',
    //             success: 'Diagnóstico concluído ',
    //             error: 'Ocorreu um erro',
    //         }
    //     )
    //     console.log(promise)
    // }
}

const useToast = () => {
    return ({ toast: appToast })
}

export { useToast }





