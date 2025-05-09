export interface ServerRes {
    diagnosisName: string
    diagnosisProbability: string
}

export interface ReqTypes {
   sendImage: (path:string, reqBody: File, reqBodyProps:any) => Promise<ServerRes[]> 
}


