import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

//todo: make app relative
import { NorthwindService } from 'app/services/northwind/northwind.service';
import { Category } from 'app/models/category';

@Component({
  selector: 'app-input-controls',
  templateUrl: './input-controls.component.html',
  styleUrls: ['./input-controls.component.scss'],
})
export class InputControlsComponent implements OnInit {
  clearForm() {
    throw new Error('Method not implemented.');
  }
  submitForm() {
    throw new Error('Method not implemented.');
  }
  myForm: FormGroup;
  listItems!: Observable<Category[]>;

  readonly isDevelopment: boolean = false;

  constructor(private readonly _northwindService: NorthwindService) {
    // used to show form values when debugging
    this.isDevelopment = isDevMode();

    this.myForm = new FormGroup({
      switch: new FormControl(true, Validators.required),
      textbox: new FormControl('', [Validators.required, Validators.minLength(3)]),
      textarea: new FormControl('', [Validators.required, Validators.minLength(3)]),
      checkbox: new FormControl(''),
      radio: new FormControl(''),
      numerictextbox: new FormControl(''),
      maskedtextbox: new FormControl(''),
      dropdownlist: new FormControl(''),
    });
  }

  ngOnInit() {
    this.listItems = this._northwindService.getCategories();
  }
}
