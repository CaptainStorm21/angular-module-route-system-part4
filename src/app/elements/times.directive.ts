import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    //dependency injerctor
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
      console.log ("Block statement execution no." + i);
      // {} empty object serves as context

    }
  }
}
