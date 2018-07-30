import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './_components/header';
import {PageNotFoundComponent} from './_components/page-not-found';
import {FooterComponent} from './_components/footer';
import {SvgIcoComponent} from './_components/svg-ico';
import {EditComponent} from './_components/edit';
import {FormsModule} from '@angular/forms';
import {
  EditService
} from './services';
import {ImgCropperModule} from './_modules/img-cropper.module';
import {ColorPickerModule} from 'ngx-color-picker';
import {MaterialsModule} from './_modules/materials.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { SliderComponent } from './_components/footer/slider/slider.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SliderBlockComponent } from './_components/footer/slider-block/slider-block.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SvgIcoComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    SliderComponent,
    SliderBlockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ImgCropperModule,
    ColorPickerModule,
    CommonModule,
    MaterialsModule,
    SwiperModule
  ],
  providers: [
      EditService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
