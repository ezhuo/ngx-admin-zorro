import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core/module-import-guard';

// region: zorro modules

import {
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule,
    NzTransferModule,
    NzUploadModule,
    // SERVICES
    NzNotificationService,
    NzMessageService
} from 'ng-zorro-antd';

export const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule,
    NzTransferModule,
    NzUploadModule,
];

// endregion

// region: @delon/abc modules
import {
    // AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdZipModule
} from '@delon/abc';

export const ABCMODULES = [
    // AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdZipModule
];
// endregion

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainThemeModule } from '@delon/theme';
import { DelonCacheModule } from '@delon/cache';

// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../../_mock';
import { environment } from '@env/environment';
const MOCKMODULE = !environment.production || environment.chore === true ?
    [DelonMockModule.forRoot({ data: MOCKDATA })] : [];

// region: global config functions

// endregion

const providers = [];

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' }),
        // theme
        AlainThemeModule.forRoot(),
        // abc
        AdErrorCollectModule.forRoot(), AdFooterToolbarModule.forRoot(), AdSidebarNavModule.forRoot(), AdDownFileModule.forRoot(), AdImageModule.forRoot(),
        AdAvatarListModule.forRoot(), AdDescListModule.forRoot(), AdEllipsisModule.forRoot(), AdExceptionModule.forRoot(), AdExceptionModule.forRoot(),
        AdNoticeIconModule.forRoot(), AdNumberInfoModule.forRoot(), AdProHeaderModule.forRoot(), AdResultModule.forRoot(), AdStandardFormRowModule.forRoot(),
        AdTagSelectModule.forRoot(), AdTrendModule.forRoot(), AdUtilsModule.forRoot(), 
        AdChartsModule.forRoot(), 
        AdCountDownModule.forRoot(), 
        // AdSimpleTableModule.forRoot(),
        AdReuseTabModule.forRoot(), AdFullContentModule.forRoot(), AdXlsxModule.forRoot(), AdZipModule.forRoot(),
        // cache
        DelonCacheModule.forRoot(),
        // mock
        ...MOCKMODULE
    ]
})
export class UIModule {
    constructor( @Optional() @SkipSelf() parentModule: UIModule) {
        throwIfAlreadyLoaded(parentModule, 'UIModule');
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UIModule,
            providers: [...providers]
        };
    }
}
