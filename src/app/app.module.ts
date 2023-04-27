import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Import Angular Material
import { MatCardModule } from '@angular/material/card';

// Import de composant
import { AppComponent } from './app.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './pages/products-page/product-card/product-card.component';
import { ProductListComponent } from './pages/products-page/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsComponent } from './pages/product-page/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductPageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
