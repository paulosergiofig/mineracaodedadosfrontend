import axios from 'axios'
import { ReqTypes } from './reqTypes'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000'
})

const req = {
    post: (path: string, body: any, options?:any ) => (
        httpClient.post(path, body, options ).then((response: any) => { return (response.data) })
    )
}

const client: ReqTypes = {
    sendImage: (reqData) => {
        const dataURLToBlob = (dataURL: string): Blob => {
            const [metadata, base64Data] = dataURL.split(',');
            const mimeMatch = metadata.match(/:(.*?);/);
            const mime = mimeMatch ? mimeMatch[1] : '';
            const byteString = atob(base64Data);
            const arrayBuffer = new Uint8Array(byteString.length);
            
            for (let i = 0; i < byteString.length; i++) {
              arrayBuffer[i] = byteString.charCodeAt(i);
            }
          
            return new Blob([arrayBuffer], { type: mime });
          }
        const formData = new FormData()
        formData.append("file", dataURLToBlob(reqData.file.data_url));
        console.log(reqData.file)
        formData.append("exam_type", reqData.exam_type);
        !!reqData.patient_sex && formData.append("patient_sex", reqData.patient_sex)
        !!reqData.selected_diseases_json && formData.append("selected_diseases_json", JSON.stringify(reqData.selected_diseases_json))

        return (
            req.post(reqData.path, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    }
        
}

export { client }

