import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CapaComponent } from "./capa/capa.component";
import { DadosComponent } from "./dados/dados.component";
import { MapaComponent } from "./mapa/mapa.component";

@NgModule({
  declarations: [AppComponent, CapaComponent, DadosComponent, MapaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
