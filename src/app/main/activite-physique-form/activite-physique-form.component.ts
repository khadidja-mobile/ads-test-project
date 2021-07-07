import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  name: string;
  value: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  echelle: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tennis', echelle: 3},
  {position: 2, name: 'Gymnastique', echelle: 2},
  {position: 3, name: 'La chasse', echelle: 4},
  {position: 4, name: 'Karaté', echelle: 2},
  {position: 5, name: 'Polo à cheval', echelle: 5},
];

@Component({
  selector: 'app-activite-physique-form',
  templateUrl: './activite-physique-form.component.html',
  styleUrls: ['./activite-physique-form.component.scss']
})
export class ActivitePhysiqueFormComponent {

  animal!: string;
  name!: string;

  constructor( public dialogRef: MatDialogRef<ActivitePhysiqueFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    // tableau de valeurs
    displayedColumns: string[] = ['name', 'echelle1', 'echelle2', 'echelle3', 'echelle4', 'echelle5'];
    dataSource = ELEMENT_DATA;

}


