export class EditorContent {
    public static header = {
        contacts: {
            id: 0,
            title: 'Contact Us',
            editTabs: [{
                id: 0,
                tabName: 'Text Color',
                key: 'style',
                helpText: '',
                inputFields: [
                    {
                        id: 0,
                        key: 'contactUs',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose a color  for the title “Contact Us”',
                        value: ''
                    },
                    {
                        id: 1,
                        key: 'phone',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose a color  for the phone number(s)',
                        value: ''
                    }
                ],
            }, {
                id: 1,
                tabName: 'Content',
                key: 'text',
                helpText: 'You  should add at least one phone number. You can leave Phone number 2 fileld empty if you need only one number ',
                inputFields: [
                    {
                        id: 0,
                        key: 'title',
                        property: '',
                        type: 'text',
                        placeholder: '+44 13 4020 2048',
                        labelText: 'Phone number 1',
                        value: '+44 13 4020 2048'
                    },
                    {
                        id: 1,
                        key: 'subtitle',
                        property: '',
                        type: 'text',
                        placeholder: '+44 13 4020 2048',
                        labelText: 'Phone number 2',
                        value: '+44 13 4020 2048'

                    }
                ]
            }]

        },
        search: {
            id: 1,
            title: 'Search box',
            editTabs: [{
                id: 0,
                tabName: 'Texts',
                key: 'style',
                helpText: '',
                inputFields: [
                    {
                        id: 0,
                        key: 'searchTextColor',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose text color for the search box',
                        value: ''
                    }
                ],
            }, {
                id: 1,
                tabName: 'Borders',
                key: 'style',
                helpText: '',
                inputFields: [
                    {
                        id: 0,
                        key: 'searchBorder',
                        property: 'border-color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose border color for the search box',
                        value: ''
                    }
                ],
            }, {
                id: 2,
                tabName: 'Active elements',
                key: 'style',
                helpText: 'Color for the Active state belongs to One-style group of objects. When you change  one of this objects,  the  other will be changed automatically.',
                inputFields: [
                    {
                        id: 0,
                        key: 'activeTextColor',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose text color for the active state of search',
                        value: ''
                    }, {
                        id: 1,
                        key: 'activeBg',
                        property: 'background',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose background color for the active state of search',
                        value: ''
                    }
                ]
            }]
        },
        user: {
            id: 2,
            title: 'Cart & Profile',
            editTabs: [{
                id: 0,
                tabName: 'Texts',
                key: 'style',
                helpText: '',
                inputFields: [
                    {
                        id: 0,
                        key: 'userTextColor',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose cart and profile text colors',
                        value: ''
                    }
                ],
            }, {
                id: 1,
                tabName: 'Icons',
                key: 'style',
                helpText: '',
                inputFields: [
                    {
                        id: 0,
                        key: 'iconColor',
                        property: 'color',
                        type: 'color',
                        placeholder: '',
                        labelText: 'Choose cart and profile icons colors',
                        value: ''
                    }
                ],
            }]
        },
        logo: {
            id: 4,
            title: 'Logo',
            editTabs: [
                {
                    id: 0,
                    key: 'image',
                    helpText: 'For better result please use JPG or PNG images,  300 x 150 pixels, no more that 19 Kb',
                    inputFields: [
                        {
                            id: 0,
                            key: 'logoCompany',
                            property: 'src',
                            type: 'image',
                            value: './assets/img/logo-placeholder.png'
                        },
                        {
                            id: 1,
                            key: 'logoWidth',
                            property: 'width',
                            type: 'style',
                            value: '100%'
                        }
                    ]

                }]
        },
    };

    public static footer = {
    slider: {
      id: 5,
      title: 'Slider',
      editTabs: [
      {
        id: 0,
        key: 'image',
        helpText: 'You may add 4 slides maximum. Please, use JPG or PNG images',
        inputFields: [
          {
            id: 0,
            key: 'slide1',
            property: 'src',
            type: 'image',
            value: './assets/img/plus-icon-white.png'
          },
          {
            id: 1,
            key: 'slide2',
            property: 'src',
            type: 'image',
            value: './assets/img/plus-icon-white.png'
          },
          {
            id: 2,
            key: 'slide3',
            property: 'src',
            type: 'image',
            value: './assets/img/plus-icon-white.png'
          },
          {
            id: 3,
            key: 'slide4',
            property: 'src',
            type: 'image',
            value: './assets/img/plus-icon-white.png'
          }
        ]

      }]
    },
  };
}

