import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddBromaComponent } from './add-broma/add-broma.component';
import { BromaComponent } from './broma/broma.component';
import { ErrorDirective } from './error.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddBromaComponent,
    BromaComponent,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
