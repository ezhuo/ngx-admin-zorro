import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layout
import { LayoutDefaultComponent } from '../theme/layout/default/default.component';

// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard/v1', component: DashboardV1Component, data: { translate: 'dashboard_v1' } },
            { path: 'dashboard/analysis', component: DashboardAnalysisComponent, data: { translate: 'dashboard_analysis' } },
            { path: 'dashboard/monitor', component: DashboardMonitorComponent, data: { translate: 'dashboard_monitor' } },
            { path: 'dashboard/workplace', component: DashboardWorkplaceComponent, data: { translate: 'dashboard_workplace' } },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'other', loadChildren: './other/other.module#OtherModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
            { path: 'logics', loadChildren: './logics/logics.module#LogicsModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            { path: 'pro', loadChildren: './pro/pro.module#ProModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class RouteRoutingModule { }

export const routedComponents = [DashboardV1Component, DashboardAnalysisComponent, DashboardMonitorComponent, DashboardWorkplaceComponent];
