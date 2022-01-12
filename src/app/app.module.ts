import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './service/user.service';
import { TestInterceptor } from './interceptor/test.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
