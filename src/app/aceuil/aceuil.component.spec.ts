import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilComponent } from './aceuil.component';

describe('AceuilComponent', () => {
  let component: AceuilComponent;
  let fixture: ComponentFixture<AceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AceuilComponent]
    });
    fixture = TestBed.createComponent(AceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
