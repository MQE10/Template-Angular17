//? Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';


//? Custom Modules
import { PrimengModule } from './primeng.module';


//? Routing
import { AppRoutingModule } from './app-routing.module';


//? Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



//? State management
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './state/reducers/theme.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './state/reducers/user.reducer';
import { environment } from '../environments/environment.prod'
import { appReducer } from './state/reducers/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PrimengModule,
    ReactiveFormsModule,
    //? NgRx config
    StoreModule.forRoot({
      theme: themeReducer,
      user: userReducer,
      app: appReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
