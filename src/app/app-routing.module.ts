import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenusComponent } from './components/menus/menus.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
{ path:'', component:HomeComponent},
{ path:'signup', component:SignupComponent},
{ path:'signup/admin', component:SignupComponent},
{ path:'login', component:LoginComponent},
{ path:'admin', component:AdminComponent},
{ path:'addChef', component:AddChefComponent},
{ path:'addPlat', component:AddPlatComponent},
{ path:'addArticle', component:AddArticleComponent},
{ path:'displayUser/:id', component:DisplayUserComponent},
{ path:'displayPlat/:id', component:DisplayPlatComponent},
{ path:'displayChef/:id', component:DisplayChefComponent},
{ path:'editUser/:id', component:EditUserComponent},
{ path:'editPlat/:id', component:EditPlatComponent},
{ path:'editChef/:id', component:EditChefComponent},
{ path:'search', component:SearchComponent},
{ path:'menus', component:MenusComponent},
{ path:'orders', component:MyOrdersComponent},
{ path:'weather', component:WeatherComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
