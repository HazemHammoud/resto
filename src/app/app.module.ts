import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoPresentationComponent } from './components/video-presentation/video-presentation.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ChefComponent } from './components/chef/chef.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { SingleMenuComponent } from './components/single-menu/single-menu.component';
import { SingleChefComponent } from './components/single-chef/single-chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPlatsComponent } from './components/admin-plats/admin-plats.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminChefsComponent } from './components/admin-chefs/admin-chefs.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { MenusComponent } from './components/menus/menus.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BannerComponent,
    PopularDishesComponent,
    HistoryComponent,
    VideoPresentationComponent,
    PopularMenuComponent,
    ChefComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    SingleMenuComponent,
    SingleChefComponent,
    AdminComponent,
    AdminPlatsComponent,
    AdminUsersComponent,
    AdminChefsComponent,
    AddChefComponent,
    AddPlatComponent,
    AddArticleComponent,
    DisplayUserComponent,
    DisplayPlatComponent,
    DisplayChefComponent,
    EditUserComponent,
    EditPlatComponent,
    EditChefComponent,
    SearchComponent,
    MenusComponent,
    MyOrdersComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
