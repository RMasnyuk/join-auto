import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;
  public isLoaded = true;
  public serverErrors: any = {};

  constructor(private authService: AuthService, private router: Router) {
  }

  submit() {
    if (this.form.valid) {
      this.isLoaded = false;
      console.log('sending');
      this.authService.register({
        email: this.form.get('email').value,
        user_name: this.form.get('name').value,
        password: this.form.get('password').value,
        phone_number: this.form.get('phoneNumber').value,
        location: this.form.get('location').value
      }).subscribe((res: any) => {
        localStorage.setItem('user_token', res.auth_token);
        this.authService.getOwnProfileInfo().subscribe((response: any) => {
          this.authService.setCredentials(response._id);
        })
        this.router.navigate(['/']);
      }, (errors) => {
        for (const error of errors.error) {
          this.serverErrors[error.field] = error.error;
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+?3?8?(0\\d{9})$')]),
      location: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
}
