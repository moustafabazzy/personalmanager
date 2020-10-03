import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { TodoModule } from './todo/todo.module';
import { PomodoroClockModule } from './pomodoro-clock/pomodoro-clock.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    TodoModule,
    PomodoroClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
