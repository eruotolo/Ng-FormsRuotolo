import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AbstractControl } from '@angular/forms';

// FUNCIÓN BUSCADA EN INTERNET (PARECE QUE FUNCIONA) ;)
function passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    // Verifica si contiene al menos un número
    const hasNumber = /[0-9]/.test(password);
    // Verifica si contiene al menos una letra en mayúscula
    const hasUpperCase = /[A-Z]/.test(password);
    // Verifica si contiene al menos un carácter especial (opcional)

    // Puedes agregar más criterios según tus necesidades
    if (!hasNumber || !hasUpperCase) {
        return { passwordStrength: true };
    }
    return null;
}


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

    registerForm: FormGroup;

    // VALIDACIONES DE ERRORES
    nameControl= new FormControl('',[
        Validators.required,
        Validators.minLength(4)
    ]);
    lastnameControl=new FormControl('',[
        Validators.required,
        Validators.minLength(4)
    ]);
    emailControl = new FormControl('',[
        Validators.email,
        Validators.required
    ]);
    passwordControl = new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        passwordStrengthValidator
    ]);
    addressControl = new FormControl('',[
        Validators.required,
        Validators.minLength(10)
    ])
    cityControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ])
    stateControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]);
    zipControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2)
    ])


    // CONSTRUCTOR
    constructor(public formBuilder: FormBuilder){
        this.registerForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            password: this.passwordControl,
            address: this.addressControl,
            city: this.cityControl,
            state: this.stateControl,
            zip: this.zipControl
        })
    }

    // CONTROLES DE ERROR
    // Control Error Nombre
    get nameCont(){
        return this.registerForm.controls['name'];
    }
    get nameControlIsInvalid(){
        return this.nameCont.invalid && this.nameCont.touched;
    }
    // Control Error Apellido
    get lastnameCont(){
        return this.registerForm.controls['lastname'];
    }
    get lastnameControlIsInvalid(){
        return this.lastnameCont.invalid && this.lastnameCont.touched;
    }
    // Control Error Email
    get emailCont(){
        return this.registerForm.controls['email'];
    }
    get emailControlIsInvalid(){
        return this.emailCont.invalid && this.emailCont.touched;
    }
    // Control Error Password
    get passwordCont(){
        return this.registerForm.controls['password'];
    }
    get passwordControlIsInvalid(){
        return this.passwordCont.invalid && this.passwordCont.touched;
    }
    // Control Error Address
    get addressCont(){
        return this.registerForm.controls['address'];
    }
    get addressControlIsInvalid(){
        return this.addressCont.invalid && this.addressCont.touched;
    }
    // Control Error State
    get stateCont(){
        return this.registerForm.controls['state'];
    }
    get stateControlIsInvalid(){
        return this.stateCont.invalid && this.stateCont.touched;
    }
    // Control Error City
    get cityCont(){
        return this.registerForm.controls['city'];
    }
    get cityControlIsInvalid(){
        return this.cityCont.invalid && this.cityCont.touched;
    }
    // Control Error Zip
    get zipCont(){
        return this.registerForm.controls['zip'];
    }
    get zipControlIsInvalid(){
        return this.zipCont.invalid && this.zipCont.touched;
    }


    // IMPRIMIR EL JSON
    onSubmit(): void{
        console.log(this.registerForm.value)
    }
}
