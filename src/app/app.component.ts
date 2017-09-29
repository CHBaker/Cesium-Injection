import { cesiumToken } from './cesium.lib';
import { Component, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  viewer;

  constructor( @Inject(cesiumToken) private Cesium: any) {}

  ngAfterViewInit() {
    this.viewer = new this.Cesium.Viewer('cesiumContainer')
  }
}
