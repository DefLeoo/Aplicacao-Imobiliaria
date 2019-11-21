import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }


  getPosts(page){
  		//return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users?page=${page}`);
  	}

  sendPostRequest(postData){

  		const httpOpitions = {
  			headers: new HttpHeaders({
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			})
  		};

  		return this.httpClient.post("https://jsonplaceholder.typicode.com/users", postData, httpOpitions);
  	}


    sendPutRequest(id, postData){

      const httpOpitions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      };

      
      //return this.httpClient.put('http https://swapi.co/api/people/${id}', postData, httpOpitions);
      return this.httpClient.put('https://jsonplaceholder.typicode.com/users/${id}', postData, httpOpitions);

    }

    sendDeleteRequest(id){     

      return this.httpClient.delete('https://jsonplaceholder.typicode.com/users/${id}');
    }


}
