import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { GenericValidator } from 'src/app/shared/common/generic.validator';
import { SessionService } from '../../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  form: FormGroup;
  error: string;

  private validationMessages: { [key: string]: { [key: string]: string }};

  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  constructor(private fb: FormBuilder,
              private service: SessionService,
              private router: Router) {
    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password should be more than 6 characters.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
  onSubmit(): void {
    this.blockUI.start('Logging in ...');
    const { email, password } = this.form.value;
    this.service.login(email, password).subscribe(
      _ => {
        this.blockUI.stop();
        this.router.navigate(['/main']);
      },
      error => {
        this.handleError(error);
        this.blockUI.stop();
      }
    );
  }

  handleError(error): void{
    if (typeof error === 'string') {
      this.error = error;
    } else {
      if (error.status === 400 || error.status === 500) {
        this.error = error.error.error;
      } else {
        this.error = error.statusText;
      }
    }
  }

  onReset(): void{
    this.form.reset();
  }
}
