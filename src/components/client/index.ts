import { ReqTypes } from "./types"

const axios = require('axios').default

const httpClient = axios.create({
    baseUrl: ''
})

const requisition = {
    post: (path: string, reqBody: any, options:any) => (
        httpClient.post(path, reqBody, options).then((response: any) => { return (response.data) })
    )
}

const client: ReqTypes = {
    sendImage: (path: string, image: File, reqBodyProps: any) => {
        return (
            requisition.post(path, image, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                ...reqBodyProps
            })
        )
    }
        
}

export { client }

