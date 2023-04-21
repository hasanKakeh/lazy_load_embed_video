import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxLiteYoutubeModule, NgxLiteVimeoModule } from 'ngx-lite-video'
@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, NgxLiteYoutubeModule, NgxLiteVimeoModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
}
