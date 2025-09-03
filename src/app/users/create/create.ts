import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService, User } from '../../services/users';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './create.html',
  styleUrls: ['./create.css']
})
export class CreateComponent {
  private fb = inject(FormBuilder);
  private usersService = inject(UsersService);

  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: User = {
        id: 0, // jsonplaceholder ignora el id en POST
        ...this.userForm.value
      };

      this.usersService.createUser(newUser).subscribe({
        next: (res: User) => {
          alert('✅ Usuario creado con éxito');
          console.log('Usuario creado:', res);
          this.userForm.reset();
        },
        error: (err) => {
          console.error('❌ Error al crear usuario:', err);
        }
      });
    }
  }
}




