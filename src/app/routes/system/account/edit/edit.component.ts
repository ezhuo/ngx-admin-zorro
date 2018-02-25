import { Component, OnInit, Injector } from '@angular/core';
import { ParentEditComponent } from '@routes/parent/parent.edit.component';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'sys-account-edit',
    templateUrl: './edit.component.html'
})
export class SysAccountEditComponent extends ParentEditComponent implements OnInit {
    i: any;
    cat: string[] = ['美食', '美食,粤菜', '美食,粤菜,湛江菜'];

    constructor(
        protected injector: Injector,
        public msgSrv: NzMessageService,
    ) {
        super(injector);
    }

    ngOnInit() {
        if (this.i.id > 0) {
            this.http.get('./assets/pois.json').subscribe((res: any) => this.i = res.data[0]);
        }
    }

    save() {
        this.http.get('./assets/pois.json').subscribe(() => {
            this.msgSrv.success('保存成功，只是模拟，实际未变更');
            this.modalSubject.next('true');
            this.close();
        });
    }
}
