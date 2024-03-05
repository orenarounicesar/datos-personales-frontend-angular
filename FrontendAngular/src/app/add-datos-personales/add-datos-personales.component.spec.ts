import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatosPersonalesComponent } from './add-datos-personales.component';

describe('AddDatosPersonalesComponent', () => {
  let component: AddDatosPersonalesComponent;
  let fixture: ComponentFixture<AddDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDatosPersonalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
