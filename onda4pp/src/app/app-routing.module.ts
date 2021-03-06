import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo:"entrar", pathMatch:"full"},
  {path:"entrar", component:LoginComponent},
  {path: "cadastrar", component:CadastroComponent},
  {path: "faleconosco", component:FaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
