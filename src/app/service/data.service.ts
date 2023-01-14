import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  createBookmark(args:any) {
    return this.http.post('http://localhost:3000/create',args,options)
  }
  listBookmark() {
    return this.http.get('http://localhost:3000/list',options)
  }
}
