import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoggedUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
