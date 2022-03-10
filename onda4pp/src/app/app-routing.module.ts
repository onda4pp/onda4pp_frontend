import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "entrar", component: LoginComponent },
  { path: "cadastrar", component: CadastroComponent },
  { path: "inicio", component: InicioComponent },
  { path: "tema", component: TemaComponent },
  { path: "faleconosco", component: FaleConoscoComponent },
  { path: "home", component: HomeComponent },

  { path: "tema-edit/:id", component: TemaEditComponent },
  { path: "tema-delete/:id", component: TemaDeleteComponent },
  { path: "postagem-edit/:id", component: PostagemEditComponent },
  { path: "postagem-delete/:id", component: PostagemDeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
