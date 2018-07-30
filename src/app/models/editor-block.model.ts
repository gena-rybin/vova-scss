export interface InputFieldsInterface {
    key: string;
    property: string;
    type: string;
    placeholder: string;
    labelText: string;
    value: string;
}

export class InputFieldsModel implements InputFieldsInterface {
    key: string = null;
    property: string = null;
    type: string = null;
    placeholder: string = null;
    labelText: string = null;
    value: string = null;

    constructor(data?: InputFieldsInterface) {
        Object.assign(this, data);
    }
}

export interface EditTabsInterface {
    id: number;
    tabName: string;
    key: string;
    helpText: string;
    inputFields: Array<InputFieldsInterface>;
}

export class EditTabsModel implements EditTabsInterface {
    id: number = null;
    tabName: string = null;
    key: string = null;
    helpText: string = null;
    inputFields: Array<InputFieldsInterface> =[];

    constructor(data?: EditTabsInterface) {
        Object.assign(this, data);
    }
}

export interface EditorBlockInterface {
    id: number;
    title: string;
    editTabs: Array<EditTabsInterface>;
}

export class EditorBlockModel implements EditorBlockInterface {
    id: number = null;
    title: string = null;
    editTabs: Array<EditTabsInterface> = [];

    constructor(data?: EditorBlockInterface) {
        Object.assign(this, data);
    }
}

