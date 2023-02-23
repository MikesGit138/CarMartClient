import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/services/jwt.service';
import { User } from 'src/app/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup!: FormGroup;
  public showLogErr = false;
  private decoded?:any;
  public user = User;

  constructor(public router: Router, private jwtService: JwtService) { }

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
      this.jwtService.login(this.formGroup.value).subscribe({
        next: res => {
          if(res){
            this.decoded = this.jwtService.DecodeToken(res.access_token)
            //this.user.username = this.decoded.username
            this.router.navigate(['/welcome']);
          } 
        },
        error: err => console.log(err.message)
      })
    }
  }

}
