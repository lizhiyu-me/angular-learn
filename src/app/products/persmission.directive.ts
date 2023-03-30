import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPersmission]'
})
export class PersmissionDirective implements OnInit {
  @Input() appPersmission: string[] = [];
  private currentRole = 'agent';
  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }
  ngOnInit(): void {
    if (this.appPersmission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

}
