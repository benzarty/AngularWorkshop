import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myVal:string ="bonjour"

  constructor() { }

  ngOnInit(): void { 
    // mara barka tet3ayet 
  }
f(n:number)
{
  console.log("hahah")
}
}
