import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth  } from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private auth: Auth,private authService: AuthService)
  {
    
  }
  ngOnInit(){
    const user = this.auth.currentUser;
    console.log(user);
  }

  logout(){
    this.authService.logout;
  }
}
