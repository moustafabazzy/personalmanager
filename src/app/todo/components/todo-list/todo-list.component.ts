import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList = [];

  @Output()
  onDeleteTodoItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(todoId: number) {
    this.onDeleteTodoItem.emit(todoId);
  }
}

