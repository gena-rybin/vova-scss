import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {
  SwiperComponent,
  SwiperConfigInterface, SwiperDirective,
  SwiperPaginationInterface,
  SwiperScrollbarInterface
} from 'ngx-swiper-wrapper';
import {EditService} from '../../../services/index';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  public show: boolean = true;

  public slides = ['No picture loaded'];

  public type: string = 'component';
  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      type: 'bullets',
    },
    noSwiping: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  constructor(public editService: EditService,
              public cd: ChangeDetectorRef) {
    this.editService.getUserSlides()
      .subscribe(data => {
        this.slides = data;

        this.cd.detectChanges();
        this.reInit();
      });
  }

  reInit() {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.init();
    } else if (this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.update();
      this.componentRef.directiveRef.init();
    }
  }

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    // console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }

}
