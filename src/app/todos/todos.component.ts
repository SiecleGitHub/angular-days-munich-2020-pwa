import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly todoService: TodoService) { }

  add(name: string) {
    this.todoService.todos.add({
      id: v4(),
      name,
      done: false
    });
  }

  async ngOnInit() {
    this.todos = await this.todoService.todos.toArray();
  }

}
