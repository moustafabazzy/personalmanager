import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pomodoro-clock-container',
  templateUrl: './pomodoro-clock-container.component.html',
  styleUrls: ['./pomodoro-clock-container.component.scss']
})
export class PomodoroClockContainerComponent implements OnInit {

  constructor() { }

  config = { leftTime: 5000 };

  ngOnInit(): void {
  }

  handleEvent(event) {
    console.log(event);
  }

}
