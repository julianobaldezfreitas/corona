import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  map: any;

  constructor() {}

  ngOnInit(): void {
    this.map = L.map("map").setView([-29.62122111378448, -53.338623046875], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.adicionaMarker(-29.9914, -51.0809, "Alvorada<br>4"); //Alvorada
    this.adicionaMarker(-31.3297, -54.0999, "Bage<br>4"); //Bage
    this.adicionaMarker(-29.1662, -51.5165, "Bento Gonçalves<br>4"); //Bento Gonçalves
    this.adicionaMarker(-29.6747, -51.0606, "Campo bomade<br>4"); //Campo bom
    this.adicionaMarker(-29.9128, -51.1857, "Canoas<br>4"); //Canoas
    this.adicionaMarker(-29.7642, -50.0282, "Capão da Canoa<br>4"); //Capão da Canoa
    this.adicionaMarker(-29.2969, -51.5028, "Carlos Barbosa<br>4"); // Carlos Barbosa
    this.adicionaMarker(-29.1629, -51.1792, "Caxias do Sul<br>4"); //Caxias do Sul
    this.adicionaMarker(-29.9625, -51.6289, "Charqueadas<br>4"); //Charqueadas
    this.adicionaMarker(-29.5148, -51.9928, "Cruzeiro do Sul<br>4"); //Cruzeiro do Sul
    this.adicionaMarker(-29.5836, -51.0898, "Dois Irmãos<br>4"); //Doi Irmãos
    this.adicionaMarker(-30.0847, -51.6187, "Eldorado do Sul<br>4"); //Eldorado do Sul
    this.adicionaMarker(-27.6364, -52.2697, "Erechim<br>4"); //Erechim
    this.adicionaMarker(-29.6535, -51.1843, "Estância Velha<br>4"); //Estância Velha
    this.adicionaMarker(-29.5002, -51.9495, "Estrela<br>4"); //Estrela
    this.adicionaMarker(-29.2227, -51.3419, "Farroupilha<br>4"); //Farroupilha
    this.adicionaMarker(-29.5995, -51.1533, "Ivoti<br>4"); //Ivoti
    this.adicionaMarker(-29.4591, -51.9644, "Lajeado<br>4"); //Lajeado
    this.adicionaMarker(-29.8881, -50.2667, "Osório<br>4"); //Osório
    this.adicionaMarker(-30.0318, -51.2065, "Porto Alegre<br>4"); //Porto Alegre
    this.adicionaMarker(-32.0349, -52.1071, "Rio Grande<br>4"); //Rio Grande
    this.adicionaMarker(-29.6868, -53.8149, "Santa Maria<br>4"); //Santa Maria
    this.adicionaMarker(-30.8773, -55.5392, "Santana do Livramento<br>4"); //Santana do Livramento
    this.adicionaMarker(-29.1897, -54.8666, "Santiago<br>4"); //Santiago
    this.adicionaMarker(-29.8268, -50.5175, "Santo Antonio da Patrulha<br>4"); //Santo Antonio da Patrulha
    this.adicionaMarker(-29.7545, -51.1498, "São Leopoldo<br>4"); //São Leopoldo
    this.adicionaMarker(-29.6349, -51.0064, "Sapiranga<br>4"); //Sapiranga
    this.adicionaMarker(-28.7126, -51.9352, "Serafina Correa<br>4"); //Serafina Correa
    this.adicionaMarker(-29.6505, -50.7753, "Taquara<br>4"); //Taquara
    this.adicionaMarker(-29.3334, -49.7333, "Torres<br>4"); //Torres
    this.adicionaMarker(-30.0819, -51.0194, "Viamão<br>4"); //Viamão
  }

  adicionaMarker(lat: any, long: any, num: any) {
    L.marker([lat, long])
      .bindPopup(num)
      .openPopup()
      .addTo(this.map);
  }

  adicionaMarkerCirculo(lat: any, long: any, num: any) {
    let circle = L.circle([lat, long], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 20000
    })
      .bindPopup(num)
      .addTo(this.map);
  }
}
