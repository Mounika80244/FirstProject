import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  // constructor() {
    
  //  }

  ngOnInit(): void {
    
  }

  users= [ 
    "mounika",
    "mathumitha",
    "mithuna"
  ]


}
