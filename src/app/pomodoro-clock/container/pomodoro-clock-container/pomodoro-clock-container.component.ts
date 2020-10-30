import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pomodoro-clock-container',
  templateUrl: './pomodoro-clock-container.component.html',
  styleUrls: ['./pomodoro-clock-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PomodoroClockContainerComponent implements OnInit {

  constructor() { }

  config = {
    leftTime: 1500,
    demand: true,
    format: 'mm:ss',
    prettyText: this.prettyText
  };
  state: string;

  ngOnInit(): void {
  }

  handleEvent(event) {
    this.state = event.action;
  }

  prettyText(text: string): string {
    return '<div class="text-time">' + text + '</div>';
  }

  start(countdown): void {
    if (this.state === 'pause') {
      countdown.resume();
      return;
    }

    countdown.begin();
  }

  pause(countdown): void {
    countdown.pause();
  }

  reset(countdown): void {
    countdown.restart();
    countdown.begin();
  }
}
