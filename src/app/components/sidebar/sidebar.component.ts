import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() sidebar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    var nav : any = document.getElementById("mySidenav");
    nav.style.width = "250px";
    this.sidebar.emit();
  }

  closeNav() {
    var nav : any = document.getElementById("mySidenav");
    nav.style.width = "0";
  }

}
