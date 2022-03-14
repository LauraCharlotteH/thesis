/**
 * This is the interface all questionnaires should use
 */
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

export interface ICookieScore{
  website: string;
  noOfCookies: number;
  acceptedCookies: number;
}

export enum Cluster {
  low = 'LOW',
  med = 'MED',
  high = 'HIGH'
}
