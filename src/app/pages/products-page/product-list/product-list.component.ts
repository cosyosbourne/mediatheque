import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // Création d'un input pour récupérer les objets passés par le composant parent
  @Input()
  products: any[] = [];

}
