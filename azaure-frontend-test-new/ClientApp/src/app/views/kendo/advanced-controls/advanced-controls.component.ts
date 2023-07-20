import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

//todo: make app relative
import { NorthwindService } from '../../../services/northwind/northwind.service';
import { Category } from 'app/models/category';

@Component({
  selector: 'app-advanced-controls',
  templateUrl: './advanced-controls.component.html',
  styleUrls: ['./advanced-controls.component.scss'],
})
export class AdvancedControlsComponent implements OnInit {
  clearForm() {
    throw new Error('Method not implemented.');
  }
  submitForm() {
    throw new Error('Method not implemented.');
  }
  myForm: FormGroup;
  remoteData!: Observable<Category[]>;

  readonly isDevelopment: boolean = false;

  constructor(private readonly _northwindService: NorthwindService) {
    // used to show form values when debugging
    this.isDevelopment = isDevMode();

    this.myForm = new FormGroup({});
  }

  ngOnInit() {
    this.remoteData = this._northwindService.getCategories();
  }
}
