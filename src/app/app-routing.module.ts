import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'home',
        redirectTo: 'todo'
    },
    {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    },
    {
        path: 'pomodoro',
        loadChildren: () => import('./pomodoro-clock/pomodoro-clock.module').then(m => m.PomodoroClockModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
