import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable()
export class EditService {

    public editorOpenEvent = new Subject<any>();
    public userDesignEvent = new Subject<any>();
    public userSlides = new Subject<Array<any>>();

    public _loadedSlides = [];

    constructor(

    ) {}

    openEditor(location) {
        this.editorOpenEvent.next(location);
    }

    isOpeningEditor() {
        return this.editorOpenEvent.asObservable();
    }

    userEditing(value) {
        this.userDesignEvent.next(value);
    }

    userEdit() {
        return this.userDesignEvent.asObservable();
    }

    setUserSlides(slides: Array<any>) {
      this.userSlides.next(slides);
      this.setloadedSlides(slides);
    }

    getUserSlides() {
      return this.userSlides.asObservable();
    }

    setloadedSlides(slides: Array<any>) {
      this._loadedSlides = slides;
    }

    getloadedSlides(): Array<any> {
      return this._loadedSlides;
    }

    getElementsStyles(blockName, editElement, blockId, tabId) {
        if (blockId === blockName.id) {
            const tab = blockName.editTabs.find(element => {
                return element.key === 'style' && element.id === tabId;
            });
            if (Array.isArray(editElement)) {
                const style1 = tab.inputFields.find(styledEl => {
                    return styledEl.key === editElement[0];
                });
                const style2 = tab.inputFields.find(styledEl => {
                    return styledEl.key === editElement[1];
                });
                return {
                    [style1.property]: style1.value,
                    [style2.property]: style2.value
                };
            } else {
                const style = tab.inputFields.find(styledEl => {
                    return styledEl.key === editElement;
                });
                return {
                    [style.property]: style.value
                };
            }

        }
    }


}
