import { LayoutFullScreenComponent } from './../../theme/layout/default/fullscreen/fullscreen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelationComponent } from './relation/relation.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFullScreenComponent,
    children: [
      { path: 'relation', component: RelationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataVRoutingModule { }

export const routedComponents = [RelationComponent];