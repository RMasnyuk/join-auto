import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public serverErrors: any = {};

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(
        {
          email: this.form.get('email').value,
          password: this.form.get('password').value
        }
      )
        .subscribe( (res: any) => {
          localStorage.setItem('user_token', res.auth_token);
          this.authService.getOwnProfileInfo().subscribe((response: any) => {
            this.authService.setCredentials(response._id);
          })
          this.router.navigate(['/']);
        }, error => {
          for (const errorField of error.error) {
            this.serverErrors[errorField.field] = errorField.error;
          }
        })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
