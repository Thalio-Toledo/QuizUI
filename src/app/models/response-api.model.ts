export interface ResponseApi<T>{
    data: T;
    statusCode: number;
    erros:string[];
}