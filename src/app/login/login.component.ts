import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  input:any;
  token:any;

  ngOnInit(): void {
    this.input = {
      username:'',
      password:''
    };
  }
  

  onLogin(){
    this.service.loginUser(this.input).subscribe(
      res => {
        console.log(Boolean(localStorage.userType)); 
        
        this.router.navigate([`/${localStorage.getItem('userType')=='true' ? 'author': 'add_edit_recipe'}`]);
        //this.router.navigate([`/${Boolean(localStorage.userType)?'author': 'add_edit_recipe'}`])
      },
      error => {
        console.log('error', error);
      }
    );
  }

  Logout() {
    localStorage.removeItem('accessToken');
  }
 




}
