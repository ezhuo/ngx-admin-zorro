import { Component, OnInit, OnDestroy, Inject, Injector, Optional } from '@angular/core';
import { ModalService } from '@core/utils/modal.service';
import { NoticeService } from '@core/utils/notice.service';
import { SweetAlertService } from '@core/utils/sweetalert2.service';
import { HttpService } from '@core/data/http.service';
import { StateService } from '@core/data/state.service';
import { AuthService } from '@core/data/auth.service';

@Component({
  selector: 'app-base-component',
  template: ``,
  styles: [``]
})
export class BaseComponent implements OnInit, OnDestroy {

  constructor(protected injector: Injector) { }

  get modal() {
    return this.injector.get(ModalService);
  }

  get notice() {
    return this.injector.get(NoticeService);
  }

  get sweet() {
    return this.injector.get(SweetAlertService);
  }

  get http() {
    return this.injector.get(HttpService);
  }

  get state() {
    return this.injector.get(StateService);
  }

  get auth() {
    return this.injector.get(AuthService);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
