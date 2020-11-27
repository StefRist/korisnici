import { TableComponent } from './table/table.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'dodaj', component: DodajComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
