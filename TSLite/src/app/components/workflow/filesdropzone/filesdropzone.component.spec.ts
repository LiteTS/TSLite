import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesdropzoneComponent } from './filesdropzone.component';

describe('FilesdropzoneComponent', () => {
  let component: FilesdropzoneComponent;
  let fixture: ComponentFixture<FilesdropzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesdropzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesdropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
