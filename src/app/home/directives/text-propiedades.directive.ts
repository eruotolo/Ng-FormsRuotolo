import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextPropiedades]'
})
export class TextPropiedadesDirective {
    constructor(public elementRef: ElementRef, public renderer: Renderer2) {
        this.setColor();
        this.setFontSize();
        this.setFontFamily();
        this.setLineHeight();
        this.setBackGroundColor();
        this.setPadding();
        this.setMargin();
        this.setPointer();
        this.setAncho()
    }

    setColor(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fff')
    }
    setFontSize(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px')
    }
    setFontFamily(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', 'Helvetica')
    }
    setLineHeight(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'line-height', '24px')
    }
    setBackGroundColor(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#0055b7')
    }
    setPadding(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px 10px 10px 10px')
    }
    setMargin(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'margin', '5px 0px 0px 0px')
    }
    setPointer(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer')
    }
    setAncho(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', 'auto')
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#677BE0'); // Cambia 'blue' al color deseado
    }

    // Define el color de fondo cuando el mouse sale del elemento
    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#0055b7'); // Cambia 'initial' al color original deseado
    }
}
