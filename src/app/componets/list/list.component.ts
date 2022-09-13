import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  personas!: any;

  constructor(
    private _personaService: PersonasService
  ) {
    this.getPersonas();
  }

  ngOnInit(): void {
  }

  getPersonas(){
    this._personaService.getPersonas().subscribe(
      data => {
        console.log('data =>', data);
        this.personas = data;
      },
      error => {
        console.log('error => ', error);
      }
    );
  }

}
