import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements OnInit {

  header = "Header";
  isVisible: boolean = true;

  updateHeader() {
    this.header = "Cool Header";
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
