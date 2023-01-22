import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if (this.formGroup.valid){
      this.authService.superLogin(this.formGroup.value).subscribe(res => {
        if (res){
          console.log('everything worked!');
          console.log(res)
          this.router.navigate(['/welcome'])
        } else {
          console.log(res);
          console.log('not working like intended');
        }
      })
    }
  }

}
