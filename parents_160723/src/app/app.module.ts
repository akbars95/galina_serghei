import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { __appRoutingModule } from './__app-routing.module';
import { AppComponent } from './app.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CongratulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule/*,
    __appRoutingModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
