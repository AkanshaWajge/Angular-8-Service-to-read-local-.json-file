import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private _usersUrl = './assets/mydata.json';
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
}

public getJSON(): Observable<any> {
    return this.http.get(`${this._usersUrl}`);
}

public deleteJSON(id: number): Observable<any> {
  alert("id to be deleted"+id);
  return this.http.delete(`${this._usersUrl}/${id}`);
}

}
