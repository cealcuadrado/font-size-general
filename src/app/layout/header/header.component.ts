import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = false;

  public menuItems = [
    { name: 'Home', route: 'home' },
    { name: "Párrafo", route: 'paragraph'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public changeCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
