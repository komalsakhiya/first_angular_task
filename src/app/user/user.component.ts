import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	sub;
	user;
	constructor(public route: ActivatedRoute, public router: Router, public _userService: UserService) {
	}

	ngOnInit() {
		this._userService.getUsers().subscribe(res=>{
			console.log(res);
			this.user = res;
		},err=>{
			console.log(err);
		})
		// console.log(this.route)
		// this.sub = this.route.queryParams.subscribe((v)=>{
		// 	console.log(v);
		// 	if(v.name){
		// 		this.user=JSON.parse(localStorage.getItem('user'));
		// 		console.log(this.user);
		// 		if(this.user==null)
		// 			this.user=[];
		// 		this.user.push(v);
		// 		localStorage.setItem('user', JSON.stringify(this.user))
		// 	}
		// });

	}
	edit(id){
		this.router.navigate(['/edituser', id]);
	}
	// delete(id){
	// 	 for(let i = 0; i < this.user.length; ++i){
 //            if (this.user[i].id === id) {
 //                this.user.splice(i,1);
 //            }
 //        }
	// }

}
