import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-confirm-delete',
  templateUrl: './todo-confirm-delete.component.html',
  styleUrls: ['./todo-confirm-delete.scss']
})
export class TodoConfirmDeleteComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
