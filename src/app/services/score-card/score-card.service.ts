import { Injectable } from '@angular/core';
import {Cluster, ICookieScore, IOplisResult, ParticipantGroup} from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScoreCardService {
  private result: IOplisResult;
  private cookies: ICookieScore[] = new Array();
  private cluster = Cluster.med; //Cluster; TODO remove hard coding
  private group = ParticipantGroup.personalisedpa; //ParticipantGroup; //TODO remove hard coding

  constructor() { }

  setResult(res: IOplisResult){
    this.result=res;
    this.cluster = res.cluster;
  }

  getResult(){
    return this.result;
  }

  setGroup(gr: ParticipantGroup){
    this.group = gr;
  }

  getGroup(){
    return this.group;
  }

  setCluster(clus: Cluster){
    this.cluster =clus;
  }

  getCluster(){
    return this.cluster;
  }

  setCookies(cookies: ICookieScore){
    let alreadyExists = false;
    //check if exists already, and update score accordingly
    this.cookies.forEach( (cookieScore) => {
      if (cookieScore.website === cookies.website){
        cookieScore = cookies;
        alreadyExists = true;
      }
    });
    //add to list if it does not exist yet
    if(!alreadyExists){this.cookies.push(cookies);}
    //TODO remove:
    console.log(this.cookies);
  }

  getCookies(page: string){
    this.cookies.forEach( (cookieScore) => {
      if (cookieScore.website === page){
        return cookieScore;
      }
    });
  }

  /**
   * calculate the total number of accepted cookies
   */
  getNumberOfAcceptedCookies(){
    let counter = 0;
    this.cookies.forEach( (entry) => {
      counter += entry.acceptedCookies;
    });
    return counter;
  }

}
