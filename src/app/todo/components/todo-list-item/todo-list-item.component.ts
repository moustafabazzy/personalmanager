import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Todo } from '../../models/todo';
import { TodoConfirmDeleteComponent } from '../todo-confirm-delete/todo-confirm-delete.component';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.scss']
})
export class TodoListItemComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  @Input()
  todo: Todo;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openDeleteModal() {
    const modalRef = this.modalService.open(TodoConfirmDeleteComponent)
    modalRef.componentInstance.todo = this.todo;
    modalRef.result.then(
      result => {
        console.log(result);
      },
      reject => {
    });
  }

}
