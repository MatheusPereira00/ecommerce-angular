import { Component, Input} from '@angular/core';
import { NgIf } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from './validators-utils';

@Component({
  selector: 'app-custom-validation-message',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './custom-validation-message.component.html',
  styleUrls: ['./custom-validation-message.component.scss']
})
export class CustomValidationMessageComponent {

  @Input() public controlContainer!: AbstractControl;

  get errorMessage() {    
    for (const validatorName in this.controlContainer?.errors) {
        if(this.controlContainer.touched)
          return getValidatorErrorMessage(validatorName, this.controlContainer.errors[validatorName]);
    }
    return null;
  }
}


