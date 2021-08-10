import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nivelTamannio: number;
  public isMenuCollapsed = false;

  public menuItems = [
    { name: 'Home', route: 'home' },
    { name: 'Párrafo', route: 'paragraph' },
    { name: 'Switch', route: 'switch'}
  ];

  public buttons = ['btn-sm', 'btn-md', 'btn-lg'];

  constructor(
    private header:HeaderService
  ) { }

  ngOnInit(): void {
    this.header.obtenerNivelTamannio().subscribe(nivelTamannio => {
      this.nivelTamannio = nivelTamannio;
    });
  }

  public changeCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public isActive(nivel: number): boolean {
    return this.nivelTamannio == nivel;
  }

  public cambiarNivelTamannio(nivel: number): void {
    this.header.setearNivelTamannio(nivel);
  }
}
