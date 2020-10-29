import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PomodoroClockRoutingModule } from './pomodoro-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

// Components
import { PomodoroClockContainerComponent } from './container/pomodoro-clock-container/pomodoro-clock-container.component';

@NgModule({
  declarations: [
    PomodoroClockContainerComponent,
  ],
  imports: [
    CommonModule,
    PomodoroClockRoutingModule,
    CountdownModule
  ],
  providers: [],
})
export class PomodoroClockModule { }
