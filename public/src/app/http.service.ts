import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors');
  }

  getAuthor(id: any) {
    return this._http.get('/authors/' + id);
  }

  addAuthor(data: any) {
    return this._http.post('/authors', data);
  }

  updateAuthor(id: any , data: any) {
    return this._http.put('/authors/' + id, data);
  }

  deleteAuthor(id: any) {
    return this._http.delete('/authors/' + id);
  }

}
