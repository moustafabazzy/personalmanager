import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PomodoroClockContainerComponent } from './container/pomodoro-clock-container/pomodoro-clock-container.component';

const routes: Routes = [
    {
        path: '',
        component: PomodoroClockContainerComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomodoroClockRoutingModule { }

