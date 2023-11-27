import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from '../../environments/environment';
import { LoginDTO } from '../models/login-dto';
import { VerificarCredencialesDTO } from '../models/verificar-credenciales-dto';
import { AccountService } from '../services/account.service';
import { MainService } from '../services/main.service'
import { Store } from '@ngrx/store';
import { UserState } from '../state/reducers/user.reducer';
import { loadUser } from '../state/actions/user.actions';
import { DOCUMENT } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  //variables del token makro
  jwt: any;
  perfil: any;


  cargandoData = false;
  encoded: string = '';


  token = '';
  user = {
    userName: "",
    password: "",
  }
  remember = false;



  //? My variables
  showPassword: boolean = false;

  toggleShowPassword() { this.showPassword = !this.showPassword }
  //? -------------------

  constructor(
    public readonly router: Router,
    private readonly accountService: AccountService,
    private readonly messageService: MessageService,
    private readonly store: Store<{ user: UserState }>,
    @Inject(DOCUMENT) document: any
  ) {
    //? Redirect to home page whe user is already logged in
    if (localStorage.getItem("TokenUser")) this.router.navigateByUrl(localStorage.getItem('routeParams') ?? '/Usuario');

  }

  /**
   * Recupera las credenciales del usuario 
   */
  ngOnInit(): void {
    if (localStorage.getItem('credenciales') != null && localStorage.getItem('credenciales') != '') {
      let user: any = (localStorage.getItem('credenciales') ?? '');
      var actual = JSON.parse(window.atob(user))

      this.user.userName = actual.userName;
      this.user.password = actual.password ?? '';
      this.remember = true;
    }
  }

  /**
   * Verifica las credenciales del usuario
  //  * @param form
   */
  verificarCredencial() {
    this.accountService.CredentialMakro(this.user).then((token: any) => {
      this.jwt = token["token"]
      if (this.jwt != null || this.jwt != '') {
        localStorage.setItem('TokenUser', this.jwt);
        let partstoken: any = this.jwt.split('.')
        let data = partstoken[1]
        let perfil = JSON.parse(window.atob(data))
        this.store.dispatch(loadUser({ data: (perfil as UserState) }));
      }
    }).catch((err: any) => {
      this.messageService.add({ severity: 'error', summary: 'Alert!', detail: err.error });
      console.log(err);
    }).finally(() => {
      this.router.navigateByUrl(localStorage.getItem('routeParams') ?? '/Usuario');
      this.cargandoData = false;

    });
  }


}
