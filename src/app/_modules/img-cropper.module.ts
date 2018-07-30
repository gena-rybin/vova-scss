import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropperComponent } from '../_components/img-cropper';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImgCropperComponent
    ],
    exports: [
        ImgCropperComponent
    ]
})
export class ImgCropperModule {}
