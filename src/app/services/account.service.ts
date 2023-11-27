import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment'
import { loadUser } from '../state/actions/user.actions';
import { UserState } from '../state/reducers/user.reducer';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  codeRemember!: number;
  constructor(
    private readonly mainService: MainService,
    private readonly store: Store<{ user: UserState }>
  ) { }



  async renovartoken() {
    let ans: any = await this.mainService.get(`${environment.endPoint}Auth/RenovateToken`);
    return ans;
  }

  async CredentialMakro(credenciales: any) {
    let resp: any = await this.mainService.post(`${environment.endPoint}Auth/SignIn`, credenciales)
    return resp;
  }


  // async login(objLogin: any) {
  //   let ans: any = await this.mainService.post(`${environment.urlAccess}Accesos/Login`, objLogin);
  //   return ans;
  // }


  // async getProfile(): Promise<void> {
  //   let ans = await this.mainService.get<UserState>(`${environment.urlAccess}Accesos/Persona`);
  //   //? Updating user info in store
  //   this.store.dispatch(loadUser({ data: (ans as UserState) }));
  // }
}
