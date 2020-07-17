import { Component, OnInit } from '@angular/core';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcontent',
  templateUrl: './dialogcontent.component.html',
  styleUrls: ['./dialogcontent.component.css']
})
export class DialogcontentComponent implements OnInit {

name: string;

  constructor(public dialog:MatDialog) { }

  openDialog() {
     this.dialog.open(DialogueboxComponent, {
      width: '250px',
      data: {name: this.name}
    });
  }

  ngOnInit(): void {
  }

}
