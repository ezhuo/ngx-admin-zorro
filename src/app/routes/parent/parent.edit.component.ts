import { Component, OnInit, OnDestroy, Inject, Injector, Optional } from '@angular/core';
import { BaseComponent } from '@theme/parent/base.component';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
  selector: 'app-parent-edit-component',
  template: ``,
  styles: [``]
})
export class ParentEditComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(protected injector: Injector) {
    super(injector);
  }

  get modalSubject() {
    return this.injector.get(NzModalSubject);
  }

  close() {
    this.modalSubject.destroy();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
