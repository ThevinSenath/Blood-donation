import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

    password = true;
    confirmPassword = true;
    signUpForm: any = FormGroup;
    responseMessage: any;

    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            firstName:[null,[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
            lastName:[null,[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
            userName:[null,[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
            email:[null,[Validators.required]],
            password:[null,[Validators.required]],
            confirmPassword:[null,[Validators.required]],
            userType:[null,[Validators.required]],
        })
    }

    public validateSubmit() {
        if(this.signUpForm.controls['password'].value != this.signUpForm.controls['confirmPassword'].value) {
            return true;
        } else {
            return false;
        }
    }

    public handleSubmit(): void {

        var formData = this.signUpForm.value;
        var data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            userType: formData.userType
        }

        console.log(data);

        this.userService.signup(data).subscribe((response:any)=>{
            // this.responseMessage = response?.message;
            this.router.navigate(['/']);
            console.log("Successfully Registered");
        });
        
    }
    

}
