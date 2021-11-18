import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  
  info: InfoPage = {};
  cargada = false;

  team: any[] = [];
  constructor( private http: HttpClient ) {    
    //Leer archivo JSON
    this.getInfo();
    this.getTeam();
  }

  private getInfo(){
    this.http.get('assets/data/data-page.json')
        .subscribe( (resp: InfoPage) =>{
          this.cargada = true;
          this.info = resp;
          //console.log(resp);             
        });
  }

  private getTeam(){
    this.http.get('https://angular-html-fe454-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) =>{
      //this.cargada = true;
      this.team = resp;
      //console.log(resp);             
    });
  }
}
