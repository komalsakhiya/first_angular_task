import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getUsers(){
		return this.http.get("https://my.api.mockaroo.com/student.json?key=ba8996f0");
	}

	getUserById(id){
		return this.http.get("https://my.api.mockaroo.com/student.json/"+id+"?key=ba8996f0");
	}

	// postUser(body){
	// 	return this.http.post("https://my.api.mockaroo.com/student.json/?key=ba8996f0&__method=POST",body)
	// }

}

