import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
materialDataSource:MatTableDataSource<any>;

displayColumn:string[]=['position', 'name', 'weight', 'symbol'];
 ELEMENT_DATA: PeriodicElement[] = [];
@ViewChild (MatSort, {static: true}) sort:MatSort;
@ViewChild (MatPaginator, {static: true}) paginator:MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA=[
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
    this.materialDataSource=new MatTableDataSource(this.ELEMENT_DATA);
    
    this.materialDataSource.sort=this.sort;
    this.materialDataSource.paginator=this.paginator;
  }

}
