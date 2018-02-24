import { NgModule } from '@angular/core';
import { SysRoutingModule, routedComponents, entryComponents } from './sys-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
    imports: [SysRoutingModule, SharedModule],
    exports: [],
    declarations: [...routedComponents, ...entryComponents,
    SizerComponent
],
    providers: [],
    entryComponents: [...entryComponents]
})
export class SysModule { }
