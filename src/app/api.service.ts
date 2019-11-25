import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }


  getPosts(page){
  		//return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
      return this.httpClient.get(`https://swapi.co/api/people/`);
     // return this.httpClient.get(`http://5dda7be65730550014fe7823.mockapi.io/api/v1/users`);
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
      //return this.httpClient.post("https://swapi.co/api/people", postData, httpOpitions);
      //return this.httpClient.post("http://5dda7be65730550014fe7823.mockapi.io/api/v1/users", postData, httpOpitions);

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
      //return this.httpClient.put('http://5dda7be65730550014fe7823.mockapi.io/api/v1/users/${id}', postData, httpOpitions);

    }

    sendDeleteRequest(id){     

      const httpOpitions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
      }
      
      //return this.httpClient.delete('http://5dda7be65730550014fe7823.mockapi.io/api/v1/users/${id}', httpOpitions);

      return this.httpClient.delete('https://reqres.in/api/users/${id}', httpOpitions);

      //return this.httpClient.delete('https://jsonplaceholder.typicode.com/users/${id}');

    }


}


//OBS: LOGIN MOOCK API : https://www.mockapi.io/projects/5dda7be65730550014fe7824
//MINH API : http://5dda7be65730550014fe7823.mockapi.io/api/v1/users