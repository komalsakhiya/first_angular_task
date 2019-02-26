import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
	selector: 'app-adduser',
	templateUrl: './adduser.component.html',
	styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
	addForm: FormGroup;
	// user;
	constructor( public router: Router, public _userService:UserService) {
		this.addForm = new FormGroup({
			name: new FormControl('', Validators.required),
			email: new FormControl('',[Validators.required, Validators.email]),
			mobile: new FormControl('',Validators.required),
			gender: new FormControl('',Validators.required),
			dob: new FormControl('',Validators.required),
			
		});

		// this.add(this.addForm);
	}

	ngOnInit() {
		// this._userService.postUser(this.addForm).subscribe(res=>{
		// 	console.log(res);
		// 	this.user = res;
		// },err=>{
		// 	console.log(err);
		// })

	}



	// add(addForm){
	// 	this._userService.postUser(addForm).subscribe(res=>{
	// 		console.log(res);
	// 	},err=>{
	// 		console.log(err);
	// 	})
	// }



}

