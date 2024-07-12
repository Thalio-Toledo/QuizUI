import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';
import { Answer } from '../../models/answer.model';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less'
})
export class SettingsComponent implements OnInit {

  animal: string = "";
  name: string ="";



  questions: Question[] = []

  displayedColumns: string[] = ['id', 'pergunta', 'nivel', 'respostas'];
 
  constructor(private _questionService: QuestionService,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.ListQuestions()
  }

  async ListQuestions(){
    this.questions = await this._questionService.getList()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogQuestionComponent, {
      height: '400px',
      width: '1000px',
      data: {name: this.name, animal: this.animal},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

