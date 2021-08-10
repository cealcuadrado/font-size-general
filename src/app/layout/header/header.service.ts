import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private sujetoNivelTamannio = new BehaviorSubject<number>(2);

  constructor() { }

  public setearNivelTamannio(nivel: number): void {
    this.sujetoNivelTamannio.next(nivel);
  }

  public obtenerNivelTamannio(): Observable<number> {
    return this.sujetoNivelTamannio.asObservable();
  }
}


