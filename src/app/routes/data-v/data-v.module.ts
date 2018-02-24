import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DataVRoutingModule, routedComponents } from './data-v-routing.module';
import { LayoutModule } from '@theme/layout/default/layout.module';

@NgModule({
    imports: [SharedModule, LayoutModule, DataVRoutingModule],
    declarations: [...routedComponents]
})
export class DataVModule { }
