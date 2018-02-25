import { SysAccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { SysAccountEditComponent } from './account/edit/edit.component';
import { SizerComponent } from '@routes/system/sizer/sizer.component';
import { HelpCenterComponent } from './helpcenter/helpcenter.component';
import { ExtrasSettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: SysAccountComponent },
            { path: 'settings', component: ExtrasSettingsComponent },
            { path: 'helpcenter', component: HelpCenterComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule { }

export const entryComponents = [SysAccountEditComponent];

export const routedComponents = [
    SystemComponent, SysAccountComponent, SizerComponent,
    HelpCenterComponent, ExtrasSettingsComponent
];
