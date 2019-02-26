import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent } from './user/user.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AdduserComponent} from './adduser/adduser.component';
import {EdituserComponent} from './edituser/edituser.component';

const routes: Routes = [
{
	path : 'user',
	component:UserComponent
},
{
	path: 'header' ,
	component:HeaderComponent
},
{
	path: 'footer' ,
	component:FooterComponent
},
{
	path: 'adduser' ,
	component:AdduserComponent
},
{
	path: 'edituser/:id' ,
	component:EdituserComponent
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
