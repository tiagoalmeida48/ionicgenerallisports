import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardRotasGuard } from './guard/guard-rotas.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clinicas',
    loadChildren: () => import('./clinicas/clinicas.module').then( m => m.ClinicasPageModule)
  },
  {
    path: 'academias',
    loadChildren: () => import('./academias/academias.module').then( m => m.AcademiasPageModule)
  },
   {
    path: 'suplementos',
    loadChildren: () => import('./suplementos/suplementos.module').then( m => m.SuplementosPageModule)
  },
  {
    path: 'voucher',
    loadChildren: () => import('./voucher/voucher.module').then( m => m.VoucherPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'detalhesProduto/:id',
    loadChildren: () => import('./detalhes-produto/detalhes-produto.module').then( m => m.DetalhesProdutoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'modas',
    loadChildren: () => import('./modas/modas.module').then( m => m.ModasPageModule)
  },
  {
    path: 'acessorios',
    loadChildren: () => import('./acessorios/acessorios.module').then( m => m.AcessoriosPageModule)
  },
  {
    path: 'confirmar-endereco',
    loadChildren: () => import('./confirmar-endereco/confirmar-endereco.module').then( m => m.ConfirmarEnderecoPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'endereco/:id',
    loadChildren: () => import('./endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'novo-usuario',
    loadChildren: () => import('./novo-usuario/novo-usuario.module').then( m => m.NovoUsuarioPageModule)
  },
  {
    path: 'valida-voucher',
    loadChildren: () => import('./valida-voucher/valida-voucher.module').then( m => m.ValidaVoucherPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
