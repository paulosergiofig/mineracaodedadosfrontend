export interface ServerRes {
    diagnosisName: string
    diagnosisProbability: string,
    diagnosisImage?: any
}

export interface ReqTypes {
   sendImage: (path:string, reqBody: File, reqBodyProps?:any) => Promise<ServerRes[]> 
}


