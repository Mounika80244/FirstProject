import { Component, OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnChanges {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  // constructor() { }
  @Input () Name:string;
 
  // ngOnInit(): void {
  //  console.log("hi");
  // }
  // ngOnChanges():void{
  //   console.log("changes");
  // }
  buttonclick(){
var msg:string="hi hello";
console.log(msg);
  }
}
