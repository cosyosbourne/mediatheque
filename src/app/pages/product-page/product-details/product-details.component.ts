import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // Ici pas besoin de fioritures !
  // On veur juste récupérer les datas
  @Input()
  product!: any
}
