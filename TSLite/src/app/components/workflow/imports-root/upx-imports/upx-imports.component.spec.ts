import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpxImportsComponent } from './upx-imports.component';

describe('UpxImportsComponent', () => {
  let component: UpxImportsComponent;
  let fixture: ComponentFixture<UpxImportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpxImportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpxImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
