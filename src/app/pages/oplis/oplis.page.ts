import { Component, OnInit } from '@angular/core';
import {IQuestionnaire, IOplisResult, Cluster} from '../../interfaces/interfaces';
import {OplisQuestionnaireService} from '../../services/oplis-questionnaire.service';

@Component({
  selector: 'app-oplis',
  templateUrl: './oplis.page.html',
  styleUrls: ['./oplis.page.scss'],
})

export class OPLISPage implements OnInit {
  currentQuestion: number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  questions: IQuestionnaire[];
  result: IOplisResult;


  constructor(private questionnaireService: OplisQuestionnaireService) { }

  ngOnInit(): void {
    this.questions = this.questionnaireService.getQuestionnaire();
    this.currentQuestion = this.getRandom();
    this.prevAnswered.push(this.currentQuestion);
  }

  onAnswer(option: boolean){
    console.log('for Question: ' + this.currentQuestion + ' the answer is: ' + option);
    this.answerSelected = true;
    setTimeout(() => {
      //get new question at random, ensure it has not been answered before
      let newQuiz = this.getRandom();
      while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 20){
        newQuiz = this.getRandom();
      }
      this.currentQuestion = newQuiz;
      this.prevAnswered.push(this.currentQuestion);
      //check results
      this.result = this.questionnaireService.evaluate(this.correctAnswers);

      this.answerSelected = false;
    }, 300);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }

  }

  getRandom(){
    return Math.floor(Math.random() * this.questions.length);
  }

  playAgain(){
    this.prevAnswered = [];
    this.prevAnswered.push(this.getRandom());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

}
