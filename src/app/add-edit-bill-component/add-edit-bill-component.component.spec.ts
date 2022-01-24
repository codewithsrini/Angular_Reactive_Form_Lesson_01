import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillComponentComponent } from './add-edit-bill-component.component';

describe('AddEditBillComponentComponent', () => {
  let component: AddEditBillComponentComponent;
  let fixture: ComponentFixture<AddEditBillComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBillComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBillComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
