import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: "full" },
  { path: "entrar", component: LoginComponent },
  { path: "cadastrar", component: CadastroComponent },
  { path: "inicio", component: InicioComponent },
  { path: "tema", component: TemaComponent },
  { path: "faleconosco", component: FaleConoscoComponent },

  // { path: "tema-edit/:id", component: TemaEditComponent },
  // { path: "tema-delete/:id", component: TemaDeleteComponent },
  // { path: "postagem-edit/:id", component: PostagemEditComponent },
  // { path: "postagem-delete/:id", component: PostagemDeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
