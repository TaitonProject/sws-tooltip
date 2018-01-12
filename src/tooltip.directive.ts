import { Directive, HostListener, Input, OnDestroy, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: '[sws-tooltip]'
})

export class SWSTooltipDirective implements OnInit, OnDestroy {

  position: string;
  @Input('sws-tooltip') tooltipTitle: string = '';
  @Input('sws-tooltip-pos') tooltipPosition: string = 'right';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.onSetPosition(this.tooltipPosition);
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltipTitle);
    this.renderer.addClass(span, 'sws-tooltip');
    this.renderer.addClass(span, this.position);
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(this.element.nativeElement, span);
    this.renderer.addClass(this.element.nativeElement, 'sws-tooltip-wrapper');
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.addClass(this.element.nativeElement, 'sws-tooltip__active');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.removeClass(this.element.nativeElement, 'sws-tooltip__active');
  }

  ngOnDestroy(): void {
    // hide tooltip
  }

  onSetPosition(pos: string) {
    switch (pos) {
      case 'bottom': {
        this.position = 'sws-tooltip__bottom';
        break;
      }
      case 'left': {
        this.position = 'sws-tooltip__left';
        let div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'sws-tooltip-arrow');
        this.renderer.addClass(div, 'sws-tooltip-arrow__right');
        this.renderer.appendChild(this.element.nativeElement, div);
        break;
      }
      case 'top': {
        this.position = 'sws-tooltip__top';
        break;
      }
      default: {
        this.position = 'sws-tooltip__right';
        let div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'sws-tooltip-arrow');
        this.renderer.addClass(div, 'sws-tooltip-arrow__left');
        this.renderer.appendChild(this.element.nativeElement, div);
        break;
      }
    }
  }

}