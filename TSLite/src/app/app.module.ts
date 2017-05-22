import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { ImportsRootComponent } from './components/workflow/imports-root/imports-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AppRoutingModule } from "./routing/app.routing.module";
import {FileDroppa} from 'file-droppa';
import { CsvImportsComponent } from './components/workflow/imports-root/csv-imports/csv-imports.component';
import { UpxImportsComponent } from './components/workflow/imports-root/upx-imports/upx-imports.component';
import { IgGridComponent } from 'igniteui-angular2';
import { UploadFilesComponent } from './components/workflow/upload-files/upload-files.component';
import { ImportCommonService } from './services/imports-services/import-common.service';
import { MessageTransportService } from './services/common-services/message-transport.service';
@NgModule({
  declarations: [
    AppComponent,IgGridComponent,
    ImportsRootComponent,
    DashboardComponent,
    WorkflowComponent,

    CsvImportsComponent,
    UpxImportsComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FileDroppa,
    FileUploadModule
  ],
  providers: [ImportCommonService,MessageTransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
