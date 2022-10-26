import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  {FormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    TodoComponent,
    ChildComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
