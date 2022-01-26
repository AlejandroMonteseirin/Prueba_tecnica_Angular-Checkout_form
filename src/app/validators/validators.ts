import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import * as luhn from "luhn" //https://www.npmjs.com/package/luhn

/* Put here all form validators*/


//you can use https://cardguru.io/ to test generate a valid card
export function creditCardValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        const isValid = luhnCheck(control.value);
        return isValid ? null : { 'creditCardValidator': isValid };
    };
}

//For validating credit cards we use: Luhn algoritm -- https://en.wikipedia.org/wiki/Luhn_algorithm

//There is no need to reinvent the wheel, using libraries is a much more suitable option than writing the code myself
//I choose https://www.npmjs.com/package/luhn package who have great reputation and a good performance
function luhnCheck(digits:string) {
    return luhn.validate(digits);
}