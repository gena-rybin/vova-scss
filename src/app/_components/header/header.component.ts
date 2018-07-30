import {Component, OnInit} from '@angular/core';
import {EditService} from '../../services';
import {EditorBlockInterface, EditorBlockModel} from '../../models/editor-block.model';
import {EditorContent} from '../edit/editor-content';
import {HeaderInterface, HeaderModel} from '../../models/header.model';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
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
            top: `${parentLocation.offsetHeight + 5}px`,
            right: `${targetLocation.offsetLeft - 66}px`,
            element: param,
            parent
        };
        this.editService.openEditor(openDetails);
    }

    getStyle(blockName, editElement, blockId, tabId) {
        if (blockId === this.editor[blockName].id) {
            const tab = this.editor[blockName].editTabs.find(element => {
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

    getText(blockName, editElement, blockId, tabId) {
        if (blockId === this.editor[blockName].id) {
            const tab = this.editor[blockName].editTabs.find(element => {
                return element.key === 'text' && element.id === tabId;
            });
            const text = tab.inputFields.find(content => {
                return content.key === editElement;
            });
            return text.value;
        }
    }

    getImg() {
        return this.editor.logo.editTabs[0].inputFields[0].value;
    }
}
