import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CardComponent } from './card/card.component';
import { QRCodeModule } from 'ngx-qrcode';
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent,ChartComponent,CardComponent
  ],
  imports: [
    CommonModule,ButtonModule,BrowserAnimationsModule,BrowserModule,AppComponent,TableModule
    ,TooltipModule,CardComponent,QRCodeModule,NgApexchartsModule,FormsModule
  ]
})
export class MyModuleModule { }
