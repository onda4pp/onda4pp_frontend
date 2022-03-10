import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  
// importar Router no construtor
  constructor(
    private router: Router
  ) { }


  ngOnInit() {
  }


  sair(){
    this.router.navigate(['/entra'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }


}