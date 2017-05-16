import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImportsRootComponent } from './components/imports-root/imports-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AppRoutingModule } from "./routing/app.routing.module";
import { FilesdropzoneComponent } from './components/workflow/filesdropzone/filesdropzone.component';
import {FileDroppa} from 'file-droppa'

@NgModule({
  declarations: [
    AppComponent,
    ImportsRootComponent,
    DashboardComponent,
    WorkflowComponent,
    FilesdropzoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FileDroppa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
