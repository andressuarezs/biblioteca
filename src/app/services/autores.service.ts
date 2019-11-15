import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(protected http:HttpClient) { }

  getAutores(){

  return this.http.get('http://trainning.omarenco.com/api/author')
    }

  postAutores(data){

  return this.http.post('http://trainning.omarenco.com/api/author',data)
  
    } 

}
