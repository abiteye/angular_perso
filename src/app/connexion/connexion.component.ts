import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../__servives/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  username = new FormControl('', Validators.required);
  hide = true;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) { }


  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['millet.christelle', Validators.required],
      password: ['password', Validators.required]
    });
  }

  onSubmit(): void{
    //alert('ok')

    if (this.loginForm.valid){
      this.onSubmit = (this.loginForm.value);
      console.log(this.loginForm.value);

      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
     .subscribe(
       data=>{
        //console.log(data);
        //localStorage.setItem('token', data.token);
          if (data === 'ROLE_Admin'){

           this.route.navigate(['/admin']);
         }
         else if (data === 'ROLE_Formateur'){
           this.route.navigate(['/formateur']);
         }
         else if (data === 'ROLE_Apprenant'){
            this.route.navigate(['/apprenant']);
         }
         else if (data === 'ROLE_Cm'){
            this.route.navigate(['/cm']);
         }
     });
    }
  }

}
