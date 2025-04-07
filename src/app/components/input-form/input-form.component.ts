import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonInput, IonItem} from "@ionic/angular/standalone";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  imports: [
    IonItem,
    IonInput,
    IonButton,
    ReactiveFormsModule
  ]
})
export class InputFormComponent {
  @Output() formSubmit =
      new EventEmitter<{ elements: string[]; length: number }>();

  inputForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      elements: ['', Validators.required],
      length: ['', Validators.required],
    });
  }

  submitData() {
    if (this.inputForm.valid) {
      const elementsString = this.inputForm.value.elements.trim();
      let elementsArray: string[];

      if (elementsString.includes(' ')) {
        elementsArray = elementsString.split(' ');
      } else {
        elementsArray = elementsString.split('');
      }

      const length = +this.inputForm.value.length;
      console.log('Submit:', elementsArray, length);
      this.formSubmit.emit({ elements: elementsArray, length });
    }
  }

}
