import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  credentials!: FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder)
    {}

  ngOnInit(): void {
    this.credentials = this.fb.group({
      name: ['',[Validators.required, Validators.nullValidator]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

  }
  get name(){
    return this.credentials.get('name');
  }
  get email(){
    return this.credentials.get('email')
  }
  get password(){
    return this.credentials.get('password');
  }

  async register(){
    const user = await this.authService.register(this.credentials.value.email, this.credentials.value.password);
    console.log(user);
    
  }

  routeToLogin(){
    this.router.navigate(['/login']);
  }

  routeToMain(){
    this.router.navigate(['/']);
  }

}