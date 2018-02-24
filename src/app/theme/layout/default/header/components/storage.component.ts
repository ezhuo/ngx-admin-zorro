import { SweetAlertService } from './../../../../../core/utils/sweetalert2.service';
import { Component, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'header-storage',
    template: `
        <div>
            <i class="anticon anticon-tool"></i>
            清空浏览器缓存
        </div>
    `
})
export class HeaderStorageComponent {

    constructor(
        private sweetAlertService: SweetAlertService,
        private messageServ: NzMessageService
    ) { }

    @HostListener('click')
    _click() {
        this.sweetAlertService.confirm('确定要清空本地浏览器的缓存吗？').then((result) => {
            console.log(result);
            if (result.value) {
                this._clear();
            }
        });

    }

    _clear() {
        localStorage.clear();
        this.messageServ.success('清空完成！');
    }
}
