import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './state/reducers/user.reducer';
import { ThemeState } from './state/reducers/theme.reducer';
import { loadTheme } from './state/actions/theme.actions';
import { AccountService } from './services/account.service';
import { loadUser } from './state/actions/user.actions';
import { MainService } from './services/main.service';
import { ActivatedRoute, Router } from '@angular/router';
//Soy giancarlo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template-Makro';
  tokenuser = localStorage.getItem('TokenUser');
  uwu: any;


  constructor(
    private readonly store: Store<{ theme: ThemeState, user: UserState }>,
    private readonly MainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.store.dispatch(loadTheme())
    this.DatosPersona();
  }

  DatosPersona() {
    if (this.tokenuser != null || this.tokenuser != '' || this.tokenuser != undefined) {
      let jwt: any = (localStorage.getItem('TokenUser') ?? '');
      let partstoken: any = jwt.split('.')
      let data = partstoken[1];
      try {
        let perfil = JSON.parse(window.atob(data))
        this.store.dispatch(loadUser({ data: (perfil as UserState) }));

      } catch (error) {
        this.MainService.logout();
      }
    }
  }



}






