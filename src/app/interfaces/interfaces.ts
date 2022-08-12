/**
 * This is the interface all questionnaires should use
 */
import {offsetSegment} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

export interface IQuestionnaire{
  question: string;
  answer: { option: string; correct: boolean } [];
}

/**
 * The format of the oplis results, results for other questionnaires will likely vary
 */
export interface IOplisResult{
  raw: number;
  oplisScore: number;
  percentageRank: number;
  cluster: Cluster;
}

/**
 * format to store number of cookies allowed in a website
 */
export interface ICookieScore{
  website: string;
  noOfCookies: number; //maximum number of cookies possible on this web site
  acceptedCookies: number;
}

/**
 * for coding of information
 */
export enum Cluster {
  low = 'Cluster_1',
  med = 'Cluster_2',
  high = 'Cluster_3'
}

/**
 * for coding of information
 */
export enum ParticipantGroup {
  personalisedpa = 'A',
  pa = 'B',
  controlGroup = 'C'
}

/**
 * necessary to toggle images on youtube and google depending on the selection
 */
export enum ActiveStatus {
  act = 'ACTIVE',
  notact= 'NOTACTIVE',
  neutral = 'NEUTRAL'
}
