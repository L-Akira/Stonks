import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import logo from 'src/assets/logo';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public logoSrc: string;

  private whereTo = {
    stocks: '/stocks',
    currency: '/currencyConversion',
    crypto: '/crypto',
    snapshot: '/snapshot',
  }

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit(){
    this.logoSrc = logo;
    const local = await this.storage.get('dados');
    
    if(local === null)
      this.storage.set('dados', []);

  }

  navigate(str: string) {
    this.router.navigate([this.whereTo[str]])
  }

}
