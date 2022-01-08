import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { FormsModule } from '@angular/forms';
import { FilterVehiclePipe } from './pipes/filter-vehicle.pipe';
import { FilterParkingPipe } from './pipes/filter-parking.pipe';
import { FilterPoiPipe } from './pipes/filter-poi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    FilterVehiclePipe,
    FilterParkingPipe,
    FilterPoiPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmJsMarkerClustererModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
