import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http: HttpClient
  ) { }

  addPokemon(data){
    return this.http.post('http://localhost/AppsHibrides/insert.php', data);
  }
}
