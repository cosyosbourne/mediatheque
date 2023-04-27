import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Sauf qu'ici, on importe notre modèle Album
import Album from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(`${this.apiUrl}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${id}`);
  }
}