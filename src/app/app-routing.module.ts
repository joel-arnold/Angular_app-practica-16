import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './componentes/linea/linea.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { DonaComponent } from './componentes/dona/dona.component';
import { RadarComponent } from './componentes/radar/radar.component';

const routes: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarraComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'radar', component: RadarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
