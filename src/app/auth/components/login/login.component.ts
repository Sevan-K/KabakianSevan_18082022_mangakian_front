import { Component, OnInit } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    // formgroup for the login form
    loginForm!: FormGroup;
    // form control for the email and the password
    emailCtrl!: FormControl;
    passwordCtrl!: FormControl;

    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initFormControls();
        this.initFormGroup();
    }

    // method to init formconrols of the login form
    private initFormControls(): void {
        this.emailCtrl = this.formBuilder.control("", [
            Validators.required,
            Validators.email,
        ]);
        this.passwordCtrl = this.formBuilder.control("", [
            Validators.required,
            Validators.minLength(8),
        ]);
    }

    // method to init the login form group
    private initFormGroup(): void {
        this.loginForm = this.formBuilder.group({
            email: this.emailCtrl,
            password: this.passwordCtrl,
        });
    }

    // method to get and display errors on template
    getFormCtrlErrorText(ctrl: AbstractControl): string {
        if (ctrl.hasError("required")) {
            return "Ce champs est requis.";
        } else if (ctrl.hasError("email")) {
            return "Renseignez une adresse mail valide.";
        } else if (ctrl.hasError("minlength")) {
            return "Le mot de passe doit contenir au moins 8 caractères.";
        } else {
            return "Ce champs contient une erreur 😱 ";
        }
    }

    // method to handle login actions
    onLogin() {
        console.log(this.loginForm.value);
        // this.authService.login();
        // TODO
        this.router.navigateByUrl("");
    }
}
