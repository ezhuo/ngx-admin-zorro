import { SweetAlertService } from './../../../core/utils/sweetalert2.service';
import { NoticeService } from './../../../core/utils/notice.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html'
})
export class NotificationComponent {
    constructor(
        private msg: NzMessageService,
        private ntf: NzNotificationService,
        private noticeService: NoticeService,
        private sweetAlertService: SweetAlertService
    ) { }

    marks = {
        0: 'naver'
    };

    notify = {
        type: 'info',
        title: 'Notification Title',
        content: `This is the content of the notification.
        This is the content of the notification. This is the content of the notification.`,
        duration: 5
    };

    percent = 0;

    // =====Message=====

    message = {
        type: 'info',
        content: 'This is a message!',
        duration: 2
    };

    createMessage() {
        this.msg.create(
            this.message.type,
            this.message.content,
            {
                nzDuration: this.message.duration * 1000
            }
        );
    }

    clearMessage() {
        this.msg.remove();
    }

    msg_test() {
        this.noticeService.msg_loading('fdsa');
    }

    sweet_test() {
        this.sweetAlertService.html('<input id="swal-input1" class="swal2-input">').then(() => {
            this.sweetAlertService.success($('#swal-input1').val());
        });
    }

    createNotify() {
        this.ntf.create(
            this.notify.type,
            this.notify.title,
            this.notify.content,
            {
                nzDuration: this.notify.duration * 1000
            }
        );
    }

    clearNotify() {
        this.ntf.remove();
    }

    // Popconfirm
    popConfirm() {
        this.msg.success('Next step.');
    }

    popCancel() {
        this.msg.error('Click on No');
    }

    // Progress Bar
    decline() {
        this.percent = this.percent - 10;
        if (this.percent < 0) {
            this.percent = 0;
        }
    }

    increase() {
        this.percent = this.percent + 10;
        if (this.percent > 100) {
            this.percent = 100;
        }
    }
}
