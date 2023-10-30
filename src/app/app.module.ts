import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './libreria-routing.module';
import { LibreriaComponent } from './libreria.component';
import { librosService } from './libros.service';

@NgModule({
  declarations: [
    LibreriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [librosService],
  bootstrap: [LibreriaComponent]
})
export class AppModule { }
