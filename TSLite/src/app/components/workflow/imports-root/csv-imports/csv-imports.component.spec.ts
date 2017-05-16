import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvImportsComponent } from './csv-imports.component';

describe('CsvImportsComponent', () => {
  let component: CsvImportsComponent;
  let fixture: ComponentFixture<CsvImportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvImportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
