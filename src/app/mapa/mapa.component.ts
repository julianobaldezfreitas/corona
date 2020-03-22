import { Component, OnInit } from "@angular/core";

declare var ol: any;

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  map: any;

  constructor() {}

  ngOnInit(): void {
    this.map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-30.115, -54.923]),
        zoom: 6,
        title: "Rio Grande do Sul"
      })
    });
  }
}
