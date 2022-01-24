import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditBillComponentComponent } from './add-edit-bill-component/add-edit-bill-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  onAddBill(): void {
    const addBillDialog = this.dialog.open(AddEditBillComponentComponent, {
      disableClose: true,
      panelClass: 'add-bill-container',
    });
  }
}
