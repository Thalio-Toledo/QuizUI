import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { baseService } from "./base.service";
import { Question } from "../models/question.model";


@Injectable({
    providedIn: 'root',
})

export class QuestionService  {
  apiUrl = environment.urlApi

  constructor(private _baseService: baseService){}

  async find(id: number){
     const url = `${this.apiUrl}/question/${id}`
    return await this._baseService.find<Question>(url)
  }

  async getList(){
    const url = `${this.apiUrl}/question`
    return await this._baseService.getList<Question>(url)
  }

  async post(question : Question){
     const url = `${this.apiUrl}/question`
     return await this._baseService.post<Question>(url,question)
  }

  async put(question : Question){
    const url = `${this.apiUrl}/question`
    return await this._baseService.put<Question>(url,question)
  }

  async delete(id : number){
    const url = `${this.apiUrl}/question/${id}`
    return await this._baseService.delete(url)
  }



}