import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  headerNew: string = "";

  constructor() { }

  @Input()
  set headerString(value: string){
    this.headerNew = value;
  }
  get headerString(){
    return this.headerNew;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Implemented ngOnChanges");
    const newHeader: SimpleChange = changes['headerString'];
    console.log("Previous Value of Header: "+newHeader.previousValue);
    console.log("Current Value of Header: "+newHeader.currentValue);
  }

  ngOnInit(): void {
    console.log("Implemented ngOnInit after ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("Implemented ngDoCheck after ngOnInit");
  }

  ngAfterContentInit(): void {
    console.log("Implemented ngAfterContentInit after ngDoCheck");
  }

  ngAfterContentChecked(): void {
    console.log("Implemented ngAfterContentChecked after ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("Implemented ngAfterViewInit after ngAfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("Implemented ngAfterViewChecked after ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("Component Destroyed");
  }

}
