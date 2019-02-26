import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
	selector: 'app-edituser',
	templateUrl: './edituser.component.html',
	styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
	sub;
	userId;
	user;
	constructor(public router:Router, public route: ActivatedRoute, public _userService: UserService) {
		this.sub = this.route.params.subscribe(params=>{
			console.log(params);
			this.userId = params.id;
			this.getUserById(this.userId)
		})
		
	}

	ngOnInit() {
	}

	getUserById(id){
		this._userService.getUserById(id).subscribe(res=>{
			console.log(res);
			this.user = res;
		},err=>{
			console.log(err);
		})
	}

	editUser(updatedUser){
		console.log(updatedUser);
	}
	
}
