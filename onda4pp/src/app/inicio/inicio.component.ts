import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  tema: Tema = new Tema()
  postagem: Postagem = new Postagem()
  //textoPostagem = environment.texto
  listaPostagem: Postagem[]
  idTema: number
  listaTema: Tema[]

  user: Usuario = new Usuario()
  idUser = environment.id


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    //private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
    
      this.router.navigate(['/entrar'])
    }
  
    //this.getAllTemas()
    //this.gettAllPostagem()
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagem = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario)=>{
      this.user = resp
    })
  }

  publicar(){
    this.tema.id_tema = this.idTema
    this.postagem.tema = this.tema

    this.user.id_usuario = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert("Sua postagem foi feita com sucesso!")
      this.postagem = new Postagem
      this.getAllPostagens()
    })

  }

}
