import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/rest/crudDocente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  
  constructor(private http: HttpClient) {}

  consultaDocente(filtro:string): Observable<any> {
    return this.http.get(baseUrl + "/listaDocentePorNombreLike/" + filtro);
  }

  
}
