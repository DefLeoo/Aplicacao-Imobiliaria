import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }


  getPosts(page){
  		//return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`);
  	}

  sendPostRequest(postData){

  		const httpOpitions = {
  			headers: new HttpHeaders({
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}),
  		}

  		//return this.httpClient.post("https://jsonplaceholder.typicode.com/users", postData, httpOpitions);
      return this.httpClient.post("https://reqres.in/api/users", postData, httpOpitions);
  	}


    sendPutRequest(postData, id){

      const httpOpitions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      };

      
     // return this.httpClient.put('https://jsonplaceholder.typicode.com/users/${id}', postData, httpOpitions);
     return this.httpClient.put('https://reqres.in/api/users/${id}', postData, httpOpitions);
    }

    sendDeleteRequest(id){     

      const httpOpitions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
      }

      return this.httpClient.delete('https://reqres.in/api/users/${id}', httpOpitions);

      //return this.httpClient.delete('https://jsonplaceholder.typicode.com/users/${id}');

    }


}
