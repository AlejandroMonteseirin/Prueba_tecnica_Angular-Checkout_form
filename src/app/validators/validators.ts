import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import * as luhn from "luhn" //https://www.npmjs.com/package/luhn

/* Put here all form validators*/


//Validation for MM/YY input in the credit card
export function expirationDateValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        var splited= control.value.split("/")
        var months = Number(splited[0]);
        var years = Number(splited[1]);
        var isValid=true;

        //Split the values and check they are numbers and months is < 12 (december) and is not expired
        var actualYear = Number(new Date().getFullYear().toString().slice(-2)); //gets the two last digits
        var actualMonth = Number(new Date().getMonth())+1; //gets the month number

        if(months ==NaN || years==NaN || months>12 || months==0 || years<actualYear || (years==actualYear && months<actualMonth) ){
            isValid=false
        }
        return isValid ? null : { 'creditCardValidator': isValid };
    };
}

//Validation for CVV number (Only numbers and 3 or 4 lenght)
export function onlyNumbers(minDigits:number,maxDigits:number): ValidatorFn {
    return (control: AbstractControl) => {
        var isValid=true;

        if(control.value.lenght<minDigits || control.value.lenght>maxDigits || Number(control.value)==NaN){
            var isValid=false;
        }
        return isValid ? null : { 'creditCardValidator': isValid };
    };
}



//you can use https://cardguru.io/ to test generate a valid card
export function creditCardValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        let isValid=false;
        if(control.value.length==16){
            isValid = luhnCheck(control.value);

        }

        return isValid ? null : { 'creditCardValidator': isValid };
    };
}

//For validating credit cards we use: Luhn algoritm  -- https://en.wikipedia.org/wiki/Luhn_algorithm

//There is no need to reinvent the wheel, using libraries is a much more suitable option than writing the code myself
//I choose https://www.npmjs.com/package/luhn package who have great reputation and a good performance
function luhnCheck(digits:string) {
    return luhn.validate(digits);
}