import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }


  getStat(list :any[],critere:string,value:any)
  {
    let n =0;

for(let i in list)
{
  if(list[i][critere]=== value)
  {
    n++
  }
}




    return n;
  }
}
