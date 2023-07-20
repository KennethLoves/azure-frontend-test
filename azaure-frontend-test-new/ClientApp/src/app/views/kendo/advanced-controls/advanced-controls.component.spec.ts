import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedControlsComponent } from 'app/views/kendo/advanced-controls/advanced-controls.component';

describe('AdvancedControlsComponent', () => {
  let component: AdvancedControlsComponent;
  let fixture: ComponentFixture<AdvancedControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedControlsComponent],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
