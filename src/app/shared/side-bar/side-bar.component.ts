import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from '../../services/main.service';

//? Theme state management
import { toggleTheme } from '../../state/actions/theme.actions';
import { ThemeState } from '../../state/reducers/theme.reducer';
import { UserState } from '../../state/reducers/user.reducer';

/**
 * menu lateral
 */

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  //? Funcionario
  userState$: Observable<UserState>;
  themeState$: Observable<ThemeState>;
  profilepicture: string = 'assets/user.png'

  @Input() menus: any[] = [];
  currentDate = new Date();


  /* *Persona que esta logeada */
  persona: any = {}

  inverted: string = 'invert(100%)';






  constructor(

    private readonly router: Router,
    private readonly mainService: MainService,
    private readonly store: Store<{ theme: ThemeState, user: UserState }>) {


    this.themeState$ = this.store.select("theme");
    this.userState$ = this.store.select("user");
    this.userState$.subscribe(user => this.persona = user);



  }

  ngOnInit(): void {
    // localStorage.getItem('darkMode')
    this.themeState$.subscribe(theme => {
      if (theme.darkMode) {
        this.inverted = '100%';

      } else {
        this.inverted = '0%';
      }
    });


  }

  /**
   * Cerrar sesion
   */
  logOut(): void {
    localStorage.removeItem('TokenUser');
    this.router.navigateByUrl('/login');

    if (localStorage.getItem('darkMode') == 'true') {
      this.toggleTheme();
    }

  }


  /**
   * Cambiar modo de la aplicacion (dark o light)
   */
  toggleTheme() {
    this.store.dispatch(toggleTheme());
  }

  raaa() {
    if (screen.width < 769) {
      this.mainService.toggle.next(false);
    }
  }

}