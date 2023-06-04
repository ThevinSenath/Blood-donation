import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    url = environment.apiUrl;

    constructor(private httpClient:HttpClient) { }

    public signup(data:any) {
        return this.httpClient.post(this.url + "/user/signup", data);
    }
}
