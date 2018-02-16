import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule, RouterModule
  ],
  declarations: [NavBarComponent,
    PaginationComponent],
  exports: [NavBarComponent,
    PaginationComponent]
})
export class SharedModule { }
