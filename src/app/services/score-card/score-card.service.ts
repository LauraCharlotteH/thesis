import { Injectable } from '@angular/core';
import {Cluster, ICookieScore, IOplisResult} from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScoreCardService {
  result: IOplisResult;
  cookies: ICookieScore[];
  cluster: Cluster;

  constructor() { }

  setResult(res: IOplisResult){
    this.result=res;
    this.cluster = res.cluster;
  }

  getResult(){
    return this.result;
  }

  setCookies(cookies: ICookieScore){
    //check if exists already, and update score accordingly
    this.cookies.forEach( (cookieScore) => {
      if (cookieScore.website === cookies.website){
        cookieScore = cookies;
      }
    });
    //add to list if it does not exist yet
    this.cookies.push(cookies);
  }

  getCookies(page: string){
    this.cookies.forEach( (cookieScore) => {
      if (cookieScore.website === page){
        return cookieScore;
      }
    });
  }

}
