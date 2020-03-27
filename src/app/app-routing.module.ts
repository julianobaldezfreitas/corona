import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CapaComponent } from "./capa/capa.component";

const routes: Routes = [{ path: "", component: CapaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
