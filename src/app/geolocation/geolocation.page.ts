import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat: number;
  lon: number;
  constructor(
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {
    this.mapInit();
  }

  // initaializing the map for latitude and longitude
 mapInit() {
  this.geolocation.getCurrentPosition().then((location) => {
    const latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // intialize the variables to the current location coodinates
    this.lat = location.coords.latitude;
    this.lon = location.coords.longitude;
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  });
 }
}
