import { Component } from '@angular/core';
import {EditService} from '../../services';
import {EditorContent} from '../edit/editor-content';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  blockName: string = null;
  editing: boolean = null;
  editor: any;


  constructor(public editService: EditService) {
  }

  ngOnInit() {
    this.editor = EditorContent.header;
    this.editService.userEdit()
      .subscribe(data => {
        this.editing = true;
        this.editor = data;
      });
  }

  editWindow(parent, param) {
    const parentLocation = <HTMLElement>document.querySelector(`.${parent}`);
    const targetLocation = <HTMLElement>document.querySelector(`.${param}`);
    parentLocation.classList.add('z-index');
    this.blockName = param;
    const openDetails = {
      top: `${parentLocation.offsetHeight + 155}px`,
      right: `${targetLocation.offsetLeft - 66}px`,
      element: param,
      parent
    };
    this.editService.openEditor(openDetails);
  }

}
