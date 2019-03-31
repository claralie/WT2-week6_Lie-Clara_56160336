import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './datauser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: "root"
})

export class DataService {
  url = "https://jsonplaceholder.typicode.com/users";
  
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }

  postEmail(post : User) {
    return this.http.post<User>(this.url , post, httpOptions);
  }
  
  
  
}
