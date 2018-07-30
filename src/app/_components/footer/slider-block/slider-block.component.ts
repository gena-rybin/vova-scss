import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {EditService} from '../../../services/index';

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.scss']
})
export class SliderBlockComponent {
  isOpen = true;
  image: any;

  slidesLengthMax = 4;
  emptySlide = '';

  showImg = false;
  imgSource: string;
  content: any;
  file: File;

  slides = (new Array(this.slidesLengthMax)).fill(this.emptySlide);

  @ViewChild('sliderWindow') sliderWindow: ElementRef;

  constructor(public editService: EditService) {
    if (this.isEmptyListSlides(this.slides)
      && !this.isEmptyListSlides(this.editService.getloadedSlides())) {
          let result = this.editService.getloadedSlides();
          result = this.addEmptySlides(result);
          this.slides = result;
    }
  }

  isEmptyListSlides(slides: Array<any>): boolean {
    return slides.every(slide => slide === this.emptySlide );
  }

  openEditor(value: boolean) {
    const classL = this.sliderWindow.nativeElement.classList;
    if (!classL.contains('edited')) {
      classL.add('edited');
    }
    this.isOpen = true;
  }


  public fileChangeImage(index, event) {
    // console.log(index);

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      // this.userHasChoosenFile = true;
      this.file = fileList[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.displayImage((<any>e.target).result, index);
        this.content = e.target;
      };
      const res = reader.readAsDataURL(event.target.files[0]);
    }
  }

  displayImage(imgBase64: string, index: number) {
    // const contentType = (<String>imgBase64.split('data:')[1]).split(';base64')[0];
    // const src = 'data:' + contentType + ';base64,';
    // this.imgSource = src + imgBase64;
    // console.log(src);

    // this.slides[`${index}`] = imgBase64;

    let result = this.slides.slice();
    result = this.removeEmptySlides(this.slides);
    result = this.addEmptySlides(result);
    result.splice(index, 1, imgBase64);

    this.slides = result.slice();
    this.editService.setUserSlides(this.removeEmptySlides(this.slides));
    // console.log(this.slides);
  }

  removeSlide(index: number) {
    // console.log(index);
    this.slides.splice(index, 1);
    this.slides.push('');
    this.editService.setUserSlides(this.removeEmptySlides(this.slides));
    // console.log(this.slides);
  }

  removeEmptySlides(data: Array<any>): Array<any> {
    const slides = data.slice();
    const result = [];
    for (let i = 0; i < slides.length; i++) {
      if (slides[i] !== this.emptySlide) {
        result.push(slides[i]);
      }
    }
    // console.log(result);
    return result;
  }

  addEmptySlides(slidesActual: Array<any>): Array<any> {
    const result = slidesActual.slice();
    for (let i = 0; i < (this.slidesLengthMax - slidesActual.length); i++) {
      if (result.length < this.slidesLengthMax) {
        result.push(this.emptySlide);
        // console.log(result);
      }
    }
    // console.log('added slides - ' + (this.slidesLengthMax - slidesActual.length));
    return result;
  }

}
