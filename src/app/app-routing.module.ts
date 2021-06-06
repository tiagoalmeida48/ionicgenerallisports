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
    path: 'endereco',
    loadChildren: () => import('./endereco/endereco.module').then( m => m.EnderecoPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'novo-usuario',
    loadChildren: () => import('./novo-usuario/novo-usuario.module').then( m => m.NovoUsuarioPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'escolher-pagamento',
    loadChildren: () => import('./escolher-pagamento/escolher-pagamento.module').then( m => m.EscolherPagamentoPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'detalhes-compra',
    loadChildren: () => import('./detalhes-compra/detalhes-compra.module').then( m => m.DetalhesCompraPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'sucesso-compra',
    loadChildren: () => import('./sucesso-compra/sucesso-compra.module').then( m => m.SucessoCompraPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'info-usuario',
    loadChildren: () => import('./info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'minhas-compras',
    loadChildren: () => import('./minhas-compras/minhas-compras.module').then( m => m.MinhasComprasPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'detalhes-venda/:id',
    loadChildren: () => import('./detalhes-venda/detalhes-venda.module').then( m => m.DetalhesVendaPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'escolher-pagamento-voucher',
    loadChildren: () => import('./escolher-pagamento-voucher/escolher-pagamento-voucher.module').then( m => m.EscolherPagamentoVoucherPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'detalhes-voucher/:id',
    loadChildren: () => import('./detalhes-voucher/detalhes-voucher.module').then( m => m.DetalhesVoucherPageModule)
  },
  {
    path: 'detalhes-compra-voucher',
    loadChildren: () => import('./detalhes-compra-voucher/detalhes-compra-voucher.module').then( m => m.DetalhesCompraVoucherPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'meus-vouchers',
    loadChildren: () => import('./meus-vouchers/meus-vouchers.module').then( m => m.MeusVouchersPageModule),
    canActivate: [GuardRotasGuard]
  },
  {
    path: 'detalhes-venda-voucher/:id',
    loadChildren: () => import('./detalhes-venda-voucher/detalhes-venda-voucher.module').then( m => m.DetalhesVendaVoucherPageModule),
    canActivate: [GuardRotasGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
