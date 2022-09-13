import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonasInterface } from '../interfaces/personas.interface';
import { PlayersInterface } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonas(){
    return this.http.get<PersonasInterface>('/assets/data/p.json');
  }

  getPlayers(){
    return this.http.get<PlayersInterface[]>('/assets/data/players.json');
  }
}
