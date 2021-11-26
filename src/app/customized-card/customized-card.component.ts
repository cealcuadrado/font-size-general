import { HeaderService } from './../layout/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customized-card',
  templateUrl: './customized-card.component.html',
  styleUrls: ['./customized-card.component.scss'],
})
export class CustomizedCardComponent implements OnInit {
  nivelTamannio: number;
  headerSubscription: Subscription;

  cards = [
    {
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      code: 'A/1',
    },
    {
      title: 'Title 2',
      content: 'Donec ante urna, euismod nec sem id, congue egestas elit.',
      code: 'E/1',
    },
    {
      title: 'Title 3',
      content: 'Aenean at leo vitae diam tincidunt pretium.',
      code: 'C/1',
    },
    {
      title: 'Title 4',
      content: 'Sed volutpat blandit lacus, quis commodo leo vestibulum id.',
      code: 'OT/1',
    },
    {
      title: 'Large Title 5',
      content: 'Contenido',
      code: 'U/1',
    },
    {
      title: 'Extra Large Title 6',
      content: 'Contenido',
      code: 'C/1',
    },
  ];

  constructor(private header: HeaderService) {}

  ngOnInit(): void {
    this.headerSubscription = this.header
      .obtenerNivelTamannio()
      .subscribe((nivelTamannio) => {
        this.nivelTamannio = nivelTamannio;
      });
  }

  ngOnDestroy() {
    this.headerSubscription.unsubscribe();
  }
}
