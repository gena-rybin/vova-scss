import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'svg-ico',
    templateUrl: './svg-ico.component.html',
    styleUrls: ['./svg-ico.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SvgIcoComponent implements OnInit {

    @ViewChild('image') imageElement: ElementRef;
    @Input() source: string;

    constructor() {}

    ngOnInit() {
        const imgID = this.imageElement.nativeElement.id;
        const imgClass = this.imageElement.nativeElement.className;
        const imgURL = this.source;

        fetch(imgURL).then((response) => {
            return response.text();
        }).then((text) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');
            // Get the SVG tag, ignore the rest
            const svg = xmlDoc.getElementsByTagName('svg')[0];

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                svg.setAttribute('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                svg.setAttribute('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            svg.removeAttribute('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
                svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'));
            }

            // Replace image with new SVG
            this.imageElement.nativeElement.parentNode.replaceChild(svg, this.imageElement.nativeElement);
        });

    }
}
