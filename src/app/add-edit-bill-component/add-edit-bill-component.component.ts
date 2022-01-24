import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-bill-component',
  templateUrl: './add-edit-bill-component.component.html',
  styleUrls: ['./add-edit-bill-component.component.scss']
})
export class AddEditBillComponentComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.expenseForm = this.fb.group({
      billNumber: [''],
      purchaseDate: [''],
      shopName: ['ACME'],
    });
  }

  ngOnInit(): void {
    console.log(this.expenseForm.get('shopName'));

    this.expenseForm.get('shopName')?.setValue('CHANGED ACME');
  }

  onSave(): void {
    console.log(this.expenseForm);
    console.log(this.expenseForm.getRawValue());
  }

}
