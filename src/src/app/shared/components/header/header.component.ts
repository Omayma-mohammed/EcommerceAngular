import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {}

  method(isActive, active) {
    isActive.classList.toggle('is-active');
    active.classList.toggle('active')
  }

  methodOff(isActive,active) {
    isActive.classList.remove('is-active');
    active.classList.remove('active')
  }

}
