import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidationMessageComponent } from '../../custom-validation-message/custom-validation-message.component';
import { UserService } from 'src/app/components/services/user.service';
import { newUser } from 'src/app/components/models/user';
import { NgIf } from '@angular/common';
import { PopupComponent } from '../../../shared/popup/popup.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    CustomValidationMessageComponent,
    RouterLink,
    NgIf,
    PopupComponent,
  ],
})
export class CreateAccountComponent {
  public usuario: newUser[] = [];

  constructor(private router: Router, private userService: UserService) {}

  @ViewChild(PopupComponent)
  public popupComponent!: PopupComponent;

  public formCreate = new FormGroup({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nomeSocial: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dataNascimento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    senha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    confirmar: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public postUser(): void {
    if (this.formCreate.valid) {
      const newUser = this.formCreate.getRawValue();
      this.userService.postUser(newUser).subscribe({
        next: () => {
          this.postUser;
          this.popupComponent.tooglePopup = true;
        },
      });
    } else {
      this.popupComponent.toogleError = true;
    }
  }
}
