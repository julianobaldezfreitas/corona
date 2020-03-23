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
    let mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:4326",
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: "custom-mouse-position",
      target: document.getElementById("mouse-position"),
      undefinedHTML: "&nbsp;"
    });

    this.map = new ol.Map({
      target: "map",
      controls: ol.control
        .defaults({
          attributionOptions: {
            collapsible: false
          }
        })
        .extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-53.338623046875, -29.62122111378448]), //lat: -29.62122111378448 long: -53.338623046875
        zoom: 6
      })
    });

    this.addPoint(-29.62122111378448, -53.338623046875);

    //this.map.on("click", function(args) {
    //  console.log(args.coordinate);
    //  var lonlat = ol.proj.transform(args.coordinate, "EPSG:3857", "EPSG:4326");
    //  console.log(lonlat);

    //  var lon = lonlat[0];
    //  var lat = lonlat[1];
    //  alert(`lat: ${lat} long: ${lon}`);
    //});
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.transform([lng, lat], "EPSG:4326", "EPSG:3857")
            )
          })
        ]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/img/marker.png"
        })
      })
    });

    this.map.addLayer(vectorLayer);
  }
}
