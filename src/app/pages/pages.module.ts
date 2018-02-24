import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule, routedComponents } from './pages-routing.module';

import { LayoutModule } from 'app/theme/layout/default/layout.module';


@NgModule({
    imports: [SharedModule, RouteRoutingModule, LayoutModule],
    declarations: [
        ...routedComponents
    ]
})

export class PagesModule { }
