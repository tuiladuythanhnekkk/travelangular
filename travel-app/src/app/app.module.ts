import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SupportComponent } from './screens/support/support.component';
import { HomeComponent } from './screens/home/home.component';
import { HCMComponent } from './screens/destination/hcm/hcm.component';
import { HanoiComponent } from './screens/destination/hanoi/hanoi.component';
import { DestinationsNavComponent } from './components/destinations-nav/destinations-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DanangComponent } from './screens/destination/danang/danang.component';
import { DalatComponent } from './screens/destination/dalat/dalat.component';
import { NhatrangComponent } from './screens/destination/nhatrang/nhatrang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    LoginComponent,
    SignupComponent,
    SupportComponent,
    HomeComponent,
    HCMComponent,
    HanoiComponent,
    DestinationsNavComponent,
    DanangComponent,
    DalatComponent,
    NhatrangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
