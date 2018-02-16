import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pageSize: number = 25;
  @Input() pageIndex: number = 0;
  @Input() pageSizeOptions: number[]= [];
  @Input() length : number = 0;
  @Output() onPaginatorChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  changePage(eventData: any): void{
    this.onPaginatorChange.emit(eventData);
  }
}
