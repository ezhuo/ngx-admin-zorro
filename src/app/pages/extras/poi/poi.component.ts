import { StateService } from '@core/data/state.service';
import { HttpService } from '@core/data/http.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

import { ExtrasPoiEditComponent } from './edit/edit.component';
import { ModalService } from '@core/utils/modal.service';


@Component({
    selector: 'app-extras-poi',
    templateUrl: './poi.component.html'
})
export class ExtrasPoiComponent implements OnInit {

    list: any[] = [];
    s: any = {
        pi: 1,
        ps: 10,
        s: ''
    };
    total = 0;

    constructor(
        public http: HttpService,
        public msgSrv: NzMessageService,
        private modalHelper: ModalService,
        public stateService: StateService
    ) { }

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
        this.modalHelper.static(ExtrasPoiEditComponent, { i }).subscribe((result) => {
            console.log(result);
            this.load();
            this.msgSrv.info('回调，重新发起列表刷新');
        });
    }

    photo(i) {
        this.msgSrv.success('click photo');
    }

    sku(i) {
        this.msgSrv.success('click sku');
    }
}
