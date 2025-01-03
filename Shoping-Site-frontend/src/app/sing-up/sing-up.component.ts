import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-sing-up',
  imports: [FormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {

  username = '';
  email = '';
  password = '';

  constructor(private router: Router,
     private apiService: ApiService,
      private toastService: ToastService) { }

  onSubmit() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    this.apiService.singUp(userData).subscribe({
      next :() => {
        this.toastService.success("singUp User Success!!!");
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastService.error("Error in singUp User!!!");
        console.log(error);
      }
  })
  };
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
};
