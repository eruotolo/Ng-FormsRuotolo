import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { EjemplosComponent } from './home/ejemplos/ejemplos.component';
import { RoundedBlockDirective } from './home/directives/rounded-block.directive';
import { TextPropiedadesDirective } from './home/directives/text-propiedades.directive';
import { AlumnosComponent } from './home/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    EjemplosComponent,
    RoundedBlockDirective,
    TextPropiedadesDirective,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
