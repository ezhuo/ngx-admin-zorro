import { NzMessageService } from 'ng-zorro-antd';
import { Component, Injector } from '@angular/core';
import { ParentIndexComponent } from '@routes/parent/parent.index.component';

@Component({
    selector: 'app-helpcenter',
    templateUrl: './helpcenter.component.html'
})
export class HelpCenterComponent extends ParentIndexComponent {
    type = '';
    q = '';

    quick(key: string) {
        this.q = key;
        this.search();
    }

    search() {
        this.msg.success(`搜索：${this.q}`);
    }

    constructor(public msg: NzMessageService, protected injector: Injector) {
        super(injector);
    }
}
