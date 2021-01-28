import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'role-based-app';

  constructor(private router: Router){}
  ngOnInit(): void {
    let isLogin = window.localStorage.getItem("isLogin");
    let role = window.localStorage.getItem("role");

    if(isLogin){
      this.router.navigate([role + '/dashboard'])
    }else{
      this.router.navigate(['login'])
    }

  }
}
