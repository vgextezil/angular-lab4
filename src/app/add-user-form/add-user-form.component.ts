import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    ReactiveFormsModule,
    ValidationErrors, ValidatorFn,
    Validators
} from "@angular/forms";

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  addUserForm = this.formBuilder.group({
    id:[''],
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.!?;:%#@&()\*])[a-zA-Z0-9,.!?;:%#@&()\*]{6,}$/)]],
    confirmPassword:['',[Validators.required]],
    phone:['',[Validators.required]],
    subjects: this.formBuilder.array([this.formBuilder.control('',[Validators.required])]),
  });


  get password(){
    return this.addUserForm.get('password');
  }
  get confirmPassword(){
    return this.addUserForm.get('confirmPassword');
}
  get firstName() {
    return this.addUserForm.get('firstName');
  }
  get subjects(){
    return this.addUserForm.get('subjects') as FormArray;
  }
  get subjectsControls() {
    return this.subjects.controls;
  }
  addSubject(){
    this.subjects.push(this.formBuilder.control('',[Validators.required]))
  }
  onSubmit(){
    console.warn(this.addUserForm.value);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  users = [
    {
      id: 1,
      firstName: 'Victor',
      lastName: 'Velichko',
      email: 'mail@mail.com',
      password: 'password',
      confirmPassword: 'password',
      subjects: ['1', '2', '3'],
      phone: '+380453453454'
    }]
}
