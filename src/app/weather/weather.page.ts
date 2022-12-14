import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly router: Router) { }

  ngOnInit() { }

  async onDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
    });
    await modal.present();
  }

  async onBack() {
    await this.router.navigateByUrl('/', { replaceUrl: true })
  }

}
