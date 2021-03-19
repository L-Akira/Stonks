import { Component, OnInit } from '@angular/core';
import logo from 'src/assets/logo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public logoSrc: string;


  constructor() {}

  ngOnInit(){
    this.logoSrc = logo;
  }

}
