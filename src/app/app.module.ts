import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchCityService } from './domain/services/search-city.service';
import { FakeCityRepository } from './data/fake/fake-city-repository';
import { LoadWeatherService } from './domain/services/load-weather.service';
import { FakeWeatherRepository } from './data/fake/fake-weather-repository';

const createSearchCityService = () => {
  return new SearchCityService(new FakeCityRepository())
}

const createLoadWeatherService = () => {
  return new LoadWeatherService(new FakeWeatherRepository())
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SearchCityService, useFactory: createSearchCityService },
    { provide: LoadWeatherService, useFactory: createLoadWeatherService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
