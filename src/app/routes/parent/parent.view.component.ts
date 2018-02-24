import { Component, OnInit, OnDestroy, Inject, Injector, Optional } from '@angular/core';
import { BaseComponent } from '@theme/parent/base.component';

@Component({
  selector: 'app-parent-view-component',
  template: ``,
  styles: [``]
})
export class ParentViewComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
