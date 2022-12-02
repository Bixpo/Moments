import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomenteFormComponent } from './momente-form.component';

describe('MomenteFormComponent', () => {
  let component: MomenteFormComponent;
  let fixture: ComponentFixture<MomenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomenteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
