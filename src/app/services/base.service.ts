
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from '@angular/core';
import { ResponseApi } from "../models/response-api.model";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})

export class baseService{

    apiUrl = environment.urlApi;
    
    constructor(private http: HttpClient){}

    async find<T>(url: string){
        try{
            const response = await firstValueFrom(this.http.get<ResponseApi<T>>(url));
            return response.data;
        }catch(error){
            console.error(error);
            return {} as T;
        }
    }

    async getList<T>(url: string){
        try{
            const response = await firstValueFrom(this.http.get<ResponseApi<T[]>>(url));
            return response.data;
        }catch(error){
            console.error(error);
            return {} as T[];
        }
    }

    async post<T>(url: string, body: T){
        try{
            const response = await firstValueFrom(this.http.post<ResponseApi<boolean>>(url,body));
            return response.data;
        }catch(error){
            console.error(error);
            return {} as T;
        }
    }

    async put<T>(url: string, body: T){
        try{
            const response = await firstValueFrom(this.http.put<ResponseApi<boolean>>(url,body));
            return response.data;
        }catch(error){
            console.error(error);
            return {} as T;
        }
    }

    async delete(url: string){
        try{
            const response = await firstValueFrom(this.http.delete<ResponseApi<boolean>>(url));
            return response.data;
        }catch(error){
            console.error(error);
            return false;
        }
    }
}