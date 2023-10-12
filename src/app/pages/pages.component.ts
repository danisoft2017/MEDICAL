import { Component } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(public ps:PacientesService,public ruta:Router){
    // console.log(ps.menu)
  }
  logout(){
    this.ruta.navigateByUrl('/login');
  }
}
