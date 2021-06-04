import { IgridDataDTO } from 'src/app/dtos';


export interface stockObjectModel {
  datePicker: string;

  firstFetch: boolean;

  selectedDate: string;

  imageLink: string;

  title: string;

  selectedTicker: string;

  stockOptions:string[];

  opening: number;
  close: number;
  high: number;
  volume: number;
  low: number;
  vwa?: number;
  
  corpName: string;
}