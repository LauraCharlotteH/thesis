import { Component, OnInit } from '@angular/core';
import {IQuestionnaire, IOplisResult, Cluster} from '../../interfaces/interfaces';
import {OplisQuestionnaireService} from '../../services/oplis-questionnaire.service';
import {ScoreCardService} from '../../services/score-card/score-card.service';

@Component({
  selector: 'app-oplis',
  templateUrl: './oplis.page.html',
  styleUrls: ['./oplis.page.scss'],
})

export class OPLISPage implements OnInit {
  currentQuestion: number;
  currentAnswerResult: boolean;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  questions: IQuestionnaire[];
  result: IOplisResult;


  constructor(public scoreCardService: ScoreCardService, private questionnaireService: OplisQuestionnaireService) { }

  ngOnInit(): void {
    this.questions = this.questionnaireService.getQuestionnaire();
    this.currentQuestion = this.getRandom();
    this.prevAnswered.push(this.currentQuestion);
  }

  onSelect(result: boolean){
    this.currentAnswerResult = result;
    //enable submit button
    this.answerSelected = true;
  }

  submitAnswer(){
    //this.answerSelected = true;
    setTimeout(() => {
      //get new question at random, ensure it has not been answered before
      let newQuiz = this.getRandom();
      while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 20){
        newQuiz = this.getRandom();
      }
      this.currentQuestion = newQuiz;
      this.prevAnswered.push(this.currentQuestion);
      //recalculate full OPLIS Result
      this.result = this.questionnaireService.evaluate(this.correctAnswers);
      this.scoreCardService.setResult(this.result);

      this.answerSelected = false;
    }, 300);
    //store the result of the answered question
    if(this.currentAnswerResult){
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
