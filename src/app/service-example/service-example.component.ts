import { Component, OnInit } from '@angular/core';
import { LogindataService } from '../logindata.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {
  employees: import("c:/Users/Arun/FirstPro/src/app/detail").IEmployee[];
  public errormsg: any;

  constructor(private logindataService:LogindataService) { }

  ngOnInit(): void {

  this.logindataService.getValueEmployee().subscribe(
    (data) => this.employees=data,
    (err)=>this.errormsg=err
  );


  }

}
