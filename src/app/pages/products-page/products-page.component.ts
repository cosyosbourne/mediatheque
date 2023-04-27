import { Component, OnInit } from '@angular/core';
// Import de nos modèles de données
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';
// Import de nos services
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  // Déclaration de la liste des films
  // On ajoute un attribut films, qui contiendra un tableau d'objets de type Film
  films: Film[] = [];

  // Déclaration de la liste des albums
  // La même qu'au dessus mais pour les albums
  albums: Album[] = [];

  // Dans le constructeur, on ajout nos dépendences
  // Ici, ce sera nos services
  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) { }



  // Dans le ngOnInit, on va créer notre souscription
  // Pour info, ngOninit est un hook qui est appelé lorsque le composant est créé
  // Il est appelé une fois, et c'est là où on va créer notre souscription
  ngOnInit(): void {
    // On récupère les films : on utilise la méthode getFilms() de notre service
    // On ajoute notre souscription, et on affecte le résultat à notre tableau films
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
    // On récupère les albums : On fait tout pareil !
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });

  }
}
