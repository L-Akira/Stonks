import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import logo from 'src/assets/logo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public logoSrc: string;

  private whereTo = {
    'stocks': '/stocks',
    'currency': '/currency',
    'crypto': '/crypto',
    'snapshot': '/snapshot',
  }

  constructor(
    private router: Router,
  ) {}

  ngOnInit(){
    this.logoSrc = logo;
  }

  navigate(str: string) {
    this.router.navigate([this.whereTo[str]])
  }

}
