import { Component, OnInit, Injector } from '@angular/core';
import { SysAccountEditComponent } from './edit/edit.component';
import { ParentIndexComponent } from 'app/pages/parent/parent.index.component';

@Component({
  selector: 'sys-account',
  templateUrl: './account.component.html'
})
export class SysAccountComponent extends ParentIndexComponent implements OnInit {

  list: any[] = [];
  s: any = {
    pi: 1,
    ps: 10,
    s: ''
  };
  total = 0;

  fontSizePx = 10;

  jstree = {
    type: 'edit', // view查看 edit:编辑
    api: '/canton',
    data: [],
    open_all: false,
    clickNode: function (node) {

      return void 0;
    }
  };

  jstreeChange($event) {
    console.log($event);
  }

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.load();
  }

  load(reload: boolean = false) {
    if (reload) {
      this.s.pi = 1;
    }
    this.http.get('./assets/pois.json', this.s).subscribe((res: any) => {
      this.list = res.data;
      this.total = res.total;
    });
  }

  edit(i) {
    this.modal.static(SysAccountEditComponent, { i }).subscribe((result) => {
      console.log(result);
      this.load();
      this.notice.msg_info('回调，重新发起列表刷新');
    });
  }

  photo(i) {
    this.notice.msg_success('click photo');
  }

  sku(i) {
    this.notice.msg_success('click sku');
  }
}
