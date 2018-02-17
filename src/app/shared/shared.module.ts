import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule, RouterModule,
    NgxDatatableModule
  ],
  declarations: [NavBarComponent,
    PaginationComponent,
    NotFoundPageComponent,TableViewComponent],
  exports: [NavBarComponent,
    PaginationComponent,
    NotFoundPageComponent,TableViewComponent]
})
export class SharedModule { }
