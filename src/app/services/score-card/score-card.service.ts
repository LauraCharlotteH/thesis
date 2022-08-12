import { Injectable } from '@angular/core';
import {Cluster, ICookieScore, IOplisResult, ParticipantGroup} from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

/**
 * temporary database, automatically wipes for each new session!
 *
 * Service uses no hard copies so that all pages work on the same storage variables and thus access the same data
 */
export class ScoreCardService {
  /**
   * storage variables for all relevant information necessary in the CA Software,
   * all storage syntax is detailed in interfaces/interfaces.ts
   */
  private result: IOplisResult;
  private cookies: ICookieScore[] = new Array();
  private cluster: Cluster;
  private group: ParticipantGroup;

  constructor() { }

  //getter and setter for the storage variables

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
