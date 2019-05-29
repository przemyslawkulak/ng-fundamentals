import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any} {
// tslint:disable-next-line: prefer-const
    let addressControl = formGroup.controls.address;
// tslint:disable-next-line: prefer-const
    let cityControl = formGroup.controls.city;
// tslint:disable-next-line: prefer-const
    let countryControl = formGroup.controls.country;
// tslint:disable-next-line: prefer-const
    let onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

    if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {validateLocation: false};
    }
  }
}
