import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList = [];

  constructor() { }

  ngOnInit(): void {
  }

}

