import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  // On indique que tous les chemins 'vides' seront renvoyés vers l'URI '/home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // On indique que l'URI '/home' correspond au composant HomePageComponent
  // Il doit être importé au préalable (plus haut)
  { path: 'home', component: HomePageComponent },
  // Idem pour l'URI '/products'
  { path: 'products', component: ProductsPageComponent },
  // On va juste ajouter une route vers les types
  { path: 'products/:type', component: ProductPageComponent },
  // Puis une route vers le type ET l'ID :
  { path: 'products/:type/:id', component: ProductPageComponent },
  // Puis, que TOUTES LES AUTRES URIs qui ne sont pas trouvées
  // ... on va les rediriger vers le composant NotFoundComponent
  { path: '**', component: NotFoundComponent }

];

// Le reste on touche pas :D
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
