import { FormControl } from '@angular/forms';
      
export function ageValidator(formControl: FormControl): { [key: string]: boolean } | null {
    const age = formControl.value;
    console.log(age);
    if (age > 50) {
        return { ageInValid: true };
    }
    return null;
}
            