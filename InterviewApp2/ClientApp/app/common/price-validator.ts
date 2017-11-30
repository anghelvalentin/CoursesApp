import { AbstractControl, ValidatorFn, FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

// validation function
function ValidatePriceFactory(): ValidatorFn {
    return (c: AbstractControl) => {
    
        let isValid = Number(c.value) >= 0;

        if (isValid) {
            return null;
        } else {
            return {
                price: {
                    valid: false
                }
            };
        }
    }
}

@Directive({
    selector: '[positivePrice][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PriceValidator, multi: true }
    ]
})
export class PriceValidator implements Validator {
   
    

    validator: ValidatorFn;

    constructor() {
        this.validator = ValidatePriceFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

}