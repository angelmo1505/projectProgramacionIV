import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  goalie: any[] = [];
  defending: any[] = [];
  midfielders: any[] = [];
  strikers: any[] = [];

  constructor(
    private _personaService: PersonasService
  ) {
    this.getPlayers();
  }

  ngOnInit(): void {
  }

  getPlayers(){
    this._personaService.getPlayers().subscribe(
      data => {
        let resp = data;
        for (let i = 0; i < resp.length; i++) {
          switch (resp[i].posision) {
            case "goalie":
              this.goalie.push(resp[i]);
              break;
            case "defending":
              this.defending.push(resp[i]);
              break;
            case "midfielders":
              this.midfielders.push(resp[i]);
              break;
            case "strikers":
              this.strikers.push(resp[i]);
              break;
            default:
              console.log('default');
          }
        }
      },
      error => {
        console.log('error => ', error);
      }
    );
  }


}
