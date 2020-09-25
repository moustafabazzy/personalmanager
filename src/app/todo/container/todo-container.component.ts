import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Services
import { TodoApiService } from '../services/api';

// Models
import { Todo } from '../models/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  faPlus = faPlus;
  todoInput = '';
  todoList = [];

  constructor(private todoService: TodoApiService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  addTodo() {
    let todo = new Todo({id: '', description: this.todoInput})
    let todoAdded = this.todoService.add(todo);
    if (!todoAdded) {
      return;
    }
    this.todoList.push(todoAdded);
  }

  loadTodos() {
    this.todoList = this.todoService.all();
  }

}
