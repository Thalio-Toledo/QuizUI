import { Answer } from './../../models/answer.model';
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrl:'./dialog-question.component.less',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  
})
export class DialogQuestionComponent  implements OnInit{
  answers: Answer[] = []

  questionForm: FormGroup;
  answerForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<DialogQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      question: new FormControl(''),
    });

    this.answerForm = new FormGroup({
      answer1: new FormControl(''),
      answer2: new FormControl(''),
    })

  }


  enviar(){
    console.log(this.questionForm.value,this.answerForm.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  adicionarControle(answer: string) {
    this.answerForm.addControl(answer, new FormControl(''));
  }

  obterNomesControles() {
    let teste = Object.keys(this.answerForm.controls)
    return Object.keys(this.answerForm.controls);
  }
}
