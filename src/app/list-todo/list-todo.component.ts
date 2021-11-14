import { CalculService } from './../services/calcul.service';
import { Todo } from './../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  listTodo: Todo[];
  statNum:number;

  constructor(private servicecal : CalculService) { }

  ngOnInit(): void {

    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officiaqui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab","completed": true}];
  }

  //share methode
  //nb produits avec quantité 0 
  //nb todo complted avec true 

  // nafes logique 

  stat()
  {
this.statNum=this.servicecal.getStat(this.listTodo,"completed",true);
console.log(this.statNum);
  }
}
