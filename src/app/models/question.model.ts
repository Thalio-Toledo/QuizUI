import { Answer } from "./answer.model"

export class Question{
    id : number = 0
    description : string =""
    idLevel : number = 0 
    answers : Answer[] = []
}