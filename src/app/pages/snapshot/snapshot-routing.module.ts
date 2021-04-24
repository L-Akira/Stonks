import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnapshotPage } from './snapshot.page';

const routes: Routes = [
  {
    path: '',
    component: SnapshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnapshotPageRoutingModule {}
