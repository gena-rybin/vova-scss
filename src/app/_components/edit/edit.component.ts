import {Component, OnInit} from '@angular/core';
import {EditService} from '../../services';
import {EditorContent} from './editor-content';

@Component({
    selector: 'app-editor',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    activeTab: string = null;
    isOpen: boolean = null;
    editBlock: boolean = null;
    editorPosition: any;

    editorContent: any;
    editorField: any;

    imageChangedEvent: any = '';
    cropperReady = false;
    logoWidth: string = null;

    constructor(
        public editService: EditService
    ) {}

    ngOnInit() {

        this.editService.isOpeningEditor()
            .subscribe(data => {
              console.log(data);
              this.isOpen = true;
                this.editBlock = true;
                this.editorContent = EditorContent[data.parent];
                this.editorPosition = {
                    'top': data.top,
                    'left': data.right
                };
                this.editorField = this.editorContent[data.element];
                this.activeTab = this.editorField.editTabs[0].tabName;
            });

    }

    close(val) {
        if (val === 'popup') {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = false;
            this.editBlock = false;
        }

    }

    editInput($event, input) {
        input.value = $event.target.value;
        this.editService.userEditing(this.editorContent);
    }


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCroppedBase64(image: string) {
        this.editService.userEditing(this.editorContent);
        this.editorField.editTabs[0].inputFields[0].value = image;
    }

    imageLoaded() {
        this.cropperReady = true;

    }

    loadImageFailed () {
        console.log('Load failed');
    }

    getLogoWidth(val) {
        return this.logoWidth = val + '%';
    }

    formatLabel(value: number | null) {
        if (!value) {
            return 0;
        }
        console.log(this.logoWidth = value + '%');
        return value;
    }


}
