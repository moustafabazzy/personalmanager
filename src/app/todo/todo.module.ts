import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

// Components
import { TodoContainerComponent } from './container/todo-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Services
import { TodoApiService } from './services/api';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  providers: [TodoApiService],
})
export class TodoModule { }

