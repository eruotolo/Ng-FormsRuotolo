import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appRoundedBlock]'
})

export class RoundedBlockDirective {
    constructor(public elementRef: ElementRef, public renderer: Renderer2) {
        this.establecerColorDeFondo();
        this.establecerPadding();
        this.establecerRadiusBorder();
    }
    establecerColorDeFondo(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    establecerPadding(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '20px')
    }

    establecerRadiusBorder(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '10px')
    }
}
