import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ZORROMODULES, ABCMODULES } from './ui.module';

import { AlainThemeModule } from '@delon/theme';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';

// region: third libs
import { CountdownModule } from 'ngx-countdown';
import { ModalService } from '@core/utils/modal.service';

import { BaseComponent } from '@theme/parent/base.component';
import { ParentIndexComponent } from '@routes/parent/parent.index.component';
import { ParentEditComponent } from '@routes/parent/parent.edit.component';
import { ParentViewComponent } from '@routes/parent/parent.view.component';

import { JsTreeDirective } from '@theme/directives/tree.directives';

const THIRDMODULES = [CountdownModule];
// endregion

// region: your componets & directives
const COMPONENTS = [BaseComponent, ParentIndexComponent, ParentEditComponent, ParentViewComponent];
const DIRECTIVES = [JsTreeDirective];
const PROVIDERS = [ModalService];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class SharedModule { }
