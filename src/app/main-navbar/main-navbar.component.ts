import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getCurrentRoute(): string {
    return this.router.url;
  }
}
