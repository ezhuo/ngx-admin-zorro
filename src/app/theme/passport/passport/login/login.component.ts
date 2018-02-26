import { NoticeService } from '@core/utils/notice.service';
import { StateService } from '@core/data/state.service';
import { SettingsService } from '@delon/theme';
import { Component, OnInit, OnDestroy, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { AuthService } from '@core/data/auth.service';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'passport-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: []
})
export class UserLoginComponent implements OnInit, OnDestroy {

    form: FormGroup;
    error = '';
    type = 0;
    loading = false;
    login$ = null;

    constructor(
        fb: FormBuilder,
        private router: Router,
        public noticeService: NoticeService,
        private settingsService: SettingsService,
        private authService: AuthService,
        private stateService: StateService,
        @Optional() @Inject(ReuseTabService) private reuseTabService: ReuseTabService,
    ) {
        this.form = fb.group({
            account: [null, [Validators.required, Validators.minLength(2)]],
            password: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
            captcha: [null, [Validators.required]],
            remember: [true]
        });
        this.reuseTabService.clear();
    }

    ngOnInit() {
    }

    // region: fields

    get account() { return this.form.controls.account; }
    get password() { return this.form.controls.password; }
    get mobile() { return this.form.controls.mobile; }
    get captcha() { return this.form.controls.captcha; }

    // endregion

    switch(ret: any) {
        this.type = ret.index;
    }

    // region: get captcha

    count = 0;
    interval$: any;

    getCaptcha() {
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0)
                clearInterval(this.interval$);
        }, 1000);
    }

    // endregion

    submit() {
        this.error = '';
        if (this.type === 0) {
            this.account.markAsDirty();
            this.password.markAsDirty();
            if (this.account.invalid || this.password.invalid) return;
        } else {
            this.mobile.markAsDirty();
            this.captcha.markAsDirty();
            if (this.mobile.invalid || this.captcha.invalid) return;
        }
        this.loading = true;

        if (this.type === 0) {
            console.log(this.form.value);
            this.login$ = this.authService
                .doLogin(this.form.value)
                .finally(() => {
                    this.loading = false;
                })
                .subscribe(
                    data => {
                        this.error = '';
                        this.noticeService.notice_success('登录成功！');
                        setTimeout(() => {
                            console.log('login....');
                            return this.goHome();
                        }, 0);
                    },
                    error => {
                        return this.error = `账户或密码错误`;
                    }
                );
        }

        // this.tokenService.set({
        //     token: '123456789',
        //     name: this.userName.value,
        //     email: `cipchk@qq.com`,
        //     id: 10000,
        //     time: +new Date
        // });

    }

    goHome() {
        return this.router.navigate([this.stateService.config.router.home]);
    }

    ngOnDestroy(): void {
        if (this.interval$) clearInterval(this.interval$);
        if (this.login$) this.login$.unsubscribe();
    }
}
