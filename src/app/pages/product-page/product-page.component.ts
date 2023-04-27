import { Component, OnInit } from '@angular/core';
// On importe les dépendences
import { ActivatedRoute, Router } from '@angular/router';
// On importe nos models
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';
// Import de nos services
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  // Déclaration de la variable produit
  // On indique qu'il peut être de type Film ou Album
  product!: Film | Album;

  // Ajoute des dépendences, ici, nos services ainsi que le router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
  ) { }

  // Ici, on déclare une méthode pour souscrire à un film

  /**
   * Permet de souscrire à un film spécifique
   * @param id id du film
   */
  private subscribeFilm(id: number): void {
    this.filmService.getFilm(id).subscribe((film) => { this.product = film })
  }

  // On fait la même pour les albums

  /**
   * Permet de souscrire à un album spécifique
   * @param id L'id de l'album
   */
  private subscribeAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe((album) => {
      this.product = album;
    });
  }

  // On créé un méthode pour définir à quel observable on souscrit.
  //Album ou film

  /**
   * Permet d'appeller la bonne souscription en fonction du type de produit
   * @param type Le type de l'objet
   * @param id id de l'objet
   */

  // les paramètres de la fonction sont des string car ils sont repris par la méthode du ngOnInit (plus bas) sous forme de string depuis l'URL
  private setSubscribe(type: string | null, id: string | null): void {
    //   Si l'objet contient album, on souscrit à un album
    if (id && type === 'albums') {
      // En appellant la méthode qu'on a créé plus tôt
      // Le fait d'ajouter '+' devant ID nous permet de le caster en number
      // En effet, par défaut c'est un string
      this.subscribeAlbum(+id)
    } else if (id && type === 'films') {
      // On fait la même chose pour films
      this.subscribeFilm(+id);
    } else if (!type || !id) {
      // Et on ajoute une redirection vers 404 si un param est manquant
      this.router.navigate(['/not-found']);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  // Et on implèmente la méthode ngOnInit()
  ngOnInit(): void {
    // On récupère la partie 'type' de l'URL
    const type = this.route.snapshot.paramMap.get('type');
    // On stock la partie 'ID' de l'URL
    const id = this.route.snapshot.paramMap.get('id')
    this.setSubscribe(type, id);
  }
}

