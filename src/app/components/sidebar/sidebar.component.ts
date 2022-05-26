import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    var nav : any = document.getElementById("mySidenav");
    nav.style.width = "250px";
  }

  closeNav() {
    var nav : any = document.getElementById("mySidenav");
    nav.style.width = "0";
  }

}
