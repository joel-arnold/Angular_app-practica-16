import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Gráficos
import { ChartsModule } from 'ng2-charts';
import { BarraComponent } from './componentes/barra/barra.component';
import { LineaComponent } from './componentes/linea/linea.component';
import { DonaComponent } from './componentes/dona/dona.component';
import { RadarComponent } from './componentes/radar/radar.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';

@NgModule({
  declarations: [AppComponent, BarraComponent, LineaComponent, DonaComponent, RadarComponent, BarraNavComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
