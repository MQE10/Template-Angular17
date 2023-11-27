import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';
import { ThemeState } from '../state/reducers/theme.reducer';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {



  //? State management
  themeState$: Observable<ThemeState>;




  @HostBinding('class') className = '';
  toggle = false;
  userName = "Mqe10";

  darkClassName = 'dark-theme';

  persona!: any;
  appReady = false;
  menus: any[] = [
    { ubicacion: 'home', titulo: 'Home', icono: 'fa-solid fa-user', external: false },
    // { ubicacion: 'Perfil', titulo: 'Perfil de usuario', icono: 'fa-solid fa-address-card', external: false },
    // // { ubicacion: 'Aplicacion', titulo: 'Aplicacion', icono: 'fa-solid fa-list', external: false },
    // // { ubicacion: 'CreacionGlobal', titulo: 'Creación', icono: 'fa-solid fa-plus', external: false },
    // { ubicacion: 'AsignacionGlobal', titulo: 'Asignación de permisos', icono: 'fa-solid fa-plus', external: false },
  ];

  items: any[] = [
    { label: '', icon: 'pi pi-fw pi-home', path: 'home' },
    { label: '', icon: 'pi pi-calendar-plus', path: 'history' },
    { label: '', icon: 'pi pi-discord', path: 'screen2' },
  ];

  itemSelected: any = {};

  constructor(
    private readonly mainService: MainService,
    private readonly store: Store<{ theme: ThemeState }>) {
    this.themeState$ = this.store.select("theme");
  }

  ngOnInit(): void {
    this.mainService.toggle.subscribe((resp: any) => {
      this.toggle = resp;
    });
    this.appReady = true;

  }
}