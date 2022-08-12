import { Component, OnInit } from '@angular/core';
import {IQuestionnaire, IOplisResult} from '../../interfaces/interfaces';
import {OplisQuestionnaireService} from '../../services/OPLIS/oplis-questionnaire.service';
import {ScoreCardService} from '../../services/score-card/score-card.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})

/**
 * Page displaying the questions provided by the used questionnaire service.
 * Questions are selected at random, the page only stores if the answer was correct or not
 * number of correct answers is provided to service at the end to compute the users cluster.
 *
 * When all questions are answered this page displays the cluster result and explains the next task
 */
export class QuestionnairePage implements OnInit {
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

  /**
   * on click of "sumbit" button, get a new question and mark it as visited.
   * also update the number of correct answers based on the result of the submitted answer
   */
  submitAnswer(){
    setTimeout(() => {
      //get new question at random, ensure it has not been answered before
      let newQuiz = this.getRandom();
      while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < this.questions.length){
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


}
