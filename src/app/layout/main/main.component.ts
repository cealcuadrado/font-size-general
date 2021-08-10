import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public nivelTamannio: number;

  constructor(
    private header: HeaderService
  ) { }

  ngOnInit(): void {
    this.header.obtenerNivelTamannio().subscribe(nivelTamannio => {
      this.nivelTamannio = nivelTamannio;
    });
  }

  public setearTamannio(): string {
    return `nivel-tamannio-${this.nivelTamannio}`;
  }
}
