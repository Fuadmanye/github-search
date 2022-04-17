import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoResultComponent } from './repo-result/repo-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NameResultComponent } from './name-result/name-result.component';
import { NameRepoComponent } from './name-repo/name-repo.component';
import { MyHomeComponent } from './my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoResultComponent,
    PageNotFoundComponent,
    NavBarComponent,
    NameResultComponent,
    NameRepoComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
