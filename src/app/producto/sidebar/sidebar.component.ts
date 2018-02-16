import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {displayName: "Cartas", url:"productoCartas"},
    {displayName: "Listado", url:"productoTabla"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
export class MenuItem{
  displayName: string;
  url: string;
}
