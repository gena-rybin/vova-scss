import {EditorBlockInterface, EditorBlockModel} from './editor-block.model';

export interface HeaderInterface {
    contacts: EditorBlockInterface;
    search: EditorBlockInterface;
    user: EditorBlockInterface;
}

export class HeaderModel implements HeaderInterface {
    contacts: EditorBlockInterface = new EditorBlockModel();
    search: EditorBlockInterface = new EditorBlockModel();
    user: EditorBlockInterface = new EditorBlockModel();

    constructor(data?: HeaderInterface) {
        Object.assign(this, data);
    }
}
