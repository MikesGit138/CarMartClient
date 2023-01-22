import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  showLogErr = false
  constructor(private authService: AuthService, public router: Router, private jwtService: JwtService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
  this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  showErrMsg(){
      this.showLogErr = !this.showLogErr
  }

  loginProcess(){
    if (this.formGroup.valid){
      this.jwtService.login(this.formGroup.value).subscribe(res => {
        if (res.payload.success){
          console.log('everything worked!');
          // console.log(res.payload)
          // console.log(res.access_token)
          this.router.navigate(['/welcome'])
        } else {
          console.log('not working like intended');
        }
      })
    }
  }

}
