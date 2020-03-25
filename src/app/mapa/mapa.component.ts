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

    //this.addPoint(-29.62122111378448, -53.338623046875);
    this.addPoint(-29.9914, -51.0809); //Alvorada
    this.addPoint(-31.3297, -54.0999); //Bage
    this.addPoint(-29.1662, -51.5165); //Bento Gonçalves
    this.addPoint(-29.6747, -51.0606); //Campo bom
    this.addPoint(-29.9128, -51.1857); //Canoas
    this.addPoint(-29.7642, -50.0282); //Capão da Canoa
    this.addPoint(-29.2969, -51.5028); // Carlos Barbosa
    this.addPoint(-29.1629, -51.1792); //Caxias do Sul
    this.addPoint(-29.9625, -51.6289); //Charqueadas
    this.addPoint(-29.5148, -51.9928); //Cruzeiro do Sul
    this.addPoint(-29.5836, -51.0898); //Doi Irmãos
    this.addPoint(-30.0847, -51.6187); //Eldorado do Sul
    this.addPoint(-27.6364, -52.2697); //Erechim
    this.addPoint(-29.6535, -51.1843); //Estância Velha
    this.addPoint(-29.5002, -51.9495); //Estrela
    this.addPoint(-29.2227, -51.3419); //Farroupilha
    this.addPoint(-29.5995, -51.1533); //Ivoti
    this.addPoint(-29.4591, -51.9644); //Lajeado
    this.addPoint(-29.8881, -50.2667); //Osório
    this.addPoint(-30.0318, -51.2065); //Porto Alegre
    this.addPoint(-32.0349, -52.1071); //Rio Grande
    this.addPoint(-29.6868, -53.8149); //Santa Maria
    this.addPoint(-30.8773, -55.5392); //Santana do Livramento
    this.addPoint(-29.1897, -54.8666); //Santiago
    this.addPoint(-29.8268, -50.5175); //Santo Antonio da Patrulha
    this.addPoint(-29.7545, -51.1498); //São Leopoldo
    this.addPoint(-29.6349, -51.0064); //Sapiranga
    this.addPoint(-28.7126, -51.9352); //Serafina Correa
    this.addPoint(-29.6505, -50.7753); //Taquara
    this.addPoint(-29.3334, -49.7333); //Torres
    this.addPoint(-30.0819, -51.0194); //Viamão

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
