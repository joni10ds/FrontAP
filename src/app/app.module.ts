import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

// externals
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';

//import {formsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    IdiomasComponent,
    ProyectosComponent,
    FooterComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    ],
  
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
