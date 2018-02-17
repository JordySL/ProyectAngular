import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() items: object[] = [];
  @Input() columns: object[] = [];
  @Input() footerHeight: number = 50;
  @Input() rowHeight: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
