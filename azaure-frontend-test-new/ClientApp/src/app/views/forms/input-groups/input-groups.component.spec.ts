import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, DropdownModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from 'app/icons/icon-subset';
import { InputGroupsComponent } from 'app/views/forms/input-groups/input-groups.component';
import { DocsComponentsModule } from 'components';

describe('InputGroupsComponent', () => {
  let component: InputGroupsComponent;
  let fixture: ComponentFixture<InputGroupsComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputGroupsComponent],
      imports: [FormModule, CardModule, GridModule, ButtonModule, DropdownModule, DocsComponentsModule, RouterTestingModule],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(InputGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
