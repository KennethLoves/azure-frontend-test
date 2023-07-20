import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlsComponent } from 'app/views/kendo/input-controls/input-controls.component';

describe('InputControlsComponent', () => {
  let component: InputControlsComponent;
  let fixture: ComponentFixture<InputControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InputControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
