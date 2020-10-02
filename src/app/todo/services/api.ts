import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoApiService {

  constructor() { }

  add(todo: Todo) {
    todo.id = 0;
    let todos = [];
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
      todo.id = todos[todos.length-1].id + 1;
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    return todo;
  }

  all() {
    let todos = [];
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
      todos = todos.map(todo => new Todo(todo));
    }

    return todos;
  }

  remove(todoId: number) {
    let todos = [];
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    if (!todos) {
      return false;
    }

    todos = todos.filter(todo => todo.id !== todoId);
    localStorage.setItem('todos', JSON.stringify(todos));

    return true;
  }


}
