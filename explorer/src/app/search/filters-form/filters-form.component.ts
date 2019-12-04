import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css']
})
export class FiltersFormComponent {

  @Input() incomeLevels;

  filtersForm = this.formBuilder.group({
    incomeLevel: [null, Validators.required],
    typeDebt: [null, Validators.required],
    geographicRegions: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output() post = new EventEmitter<any>();

  onSubmit() {
    this.post.emit(this.filtersForm.value);
    console.log(this.filtersForm.value);
  }
}
