import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.router.navigate(['/']);
    this.af.auth.logout();
  }
  
}
