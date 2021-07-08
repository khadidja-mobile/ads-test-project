import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivitePhysiqueFormComponent } from './activite-physique-form/activite-physique-form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  echelle!: number;
  name!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ActivitePhysiqueFormComponent, {
      width: '80vw',
      data: {name: this.name, animal: this.echelle}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.echelle = result;
    });
  }

  ngOnInit(): void {
  }

}
